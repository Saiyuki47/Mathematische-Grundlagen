#!/usr/bin/env python3
"""Remove the 5th argument (Kontrollfrage) from all h() calls in blatt files."""

from pathlib import Path


class TSXParser:
    def __init__(self, text):
        self.text = text
        self.pos = 0
        self.n = len(text)

    def peek(self, offset=0):
        p = self.pos + offset
        return self.text[p] if p < self.n else '\0'

    def skip_string(self, q):
        """Skip string content; pos is past opening quote q."""
        while self.pos < self.n:
            c = self.text[self.pos]
            if c == '\\':
                self.pos += 2
                continue
            if c == q:
                self.pos += 1
                return
            self.pos += 1

    def skip_template(self):
        """Skip template literal; pos is past opening backtick."""
        while self.pos < self.n:
            c = self.text[self.pos]
            if c == '\\':
                self.pos += 2
                continue
            if c == '`':
                self.pos += 1
                return
            if c == '$' and self.peek(1) == '{':
                self.pos += 2
                self.parse_js('}')
                continue
            self.pos += 1

    def skip_line_comment(self):
        while self.pos < self.n and self.text[self.pos] != '\n':
            self.pos += 1

    def skip_block_comment(self):
        while self.pos < self.n:
            if self.text[self.pos] == '*' and self.peek(1) == '/':
                self.pos += 2
                return
            self.pos += 1

    def parse_js(self, end_char):
        """
        Parse JS until end_char at depth 0.
        pos is past the opening character.
        Handles strings, templates, comments, nested delimiters, JSX.
        """
        depth = 0
        while self.pos < self.n:
            c = self.text[self.pos]

            if c == end_char and depth == 0:
                self.pos += 1
                return

            if c in ('"', "'"):
                self.pos += 1
                self.skip_string(c)
                continue

            if c == '`':
                self.pos += 1
                self.skip_template()
                continue

            if c == '/' and self.peek(1) == '/':
                self.pos += 2
                self.skip_line_comment()
                continue

            if c == '/' and self.peek(1) == '*':
                self.pos += 2
                self.skip_block_comment()
                continue

            if c in ('(', '{', '['):
                depth += 1
            elif c in (')', '}', ']'):
                depth -= 1

            # Handle JSX in JS context at depth 0
            if c == '<' and depth == 0:
                n1 = self.peek(1)
                if n1 == '>' or n1.isalpha() or n1 == '_':
                    self._parse_jsx_element()
                    continue

            self.pos += 1

    def _skip_tag_internals(self):
        """
        Skip tag attributes until > or />.
        pos is right after the tag name.
        Returns True if self-closing.
        """
        while self.pos < self.n:
            c = self.text[self.pos]
            if c == '>':
                self.pos += 1
                return False
            if c == '/' and self.peek(1) == '>':
                self.pos += 2
                return True
            if c in ('"', "'"):
                self.pos += 1
                self.skip_string(c)
            elif c == '`':
                self.pos += 1
                self.skip_template()
            elif c == '{':
                self.pos += 1
                self.parse_js('}')
            else:
                self.pos += 1
        return False

    def _skip_tag_name(self):
        while self.pos < self.n and (
            self.text[self.pos].isalnum()
            or self.text[self.pos] in ('_', '-', '.', ':')
        ):
            self.pos += 1

    def _parse_jsx_element(self):
        """
        Parse a complete JSX element starting at current pos '<'.
        Handles <tag>, <tag/>, <>, and nested elements.
        """
        assert self.text[self.pos] == '<', f"Expected '<' at {self.pos}, got '{self.text[self.pos]}'"
        n1 = self.peek(1)

        if n1 == '>':
            # Fragment opening <>
            self.pos += 2
            self._parse_jsx_content()
        elif n1.isalpha() or n1 == '_':
            # Opening tag
            self.pos += 1  # Skip '<'
            self._skip_tag_name()
            is_self_closing = self._skip_tag_internals()
            if not is_self_closing:
                self._parse_jsx_content()

    def _parse_jsx_content(self):
        """
        Parse JSX element content until matching closing tag.
        pos is right after the opening '>'.
        Returns with pos past the '>' of the closing tag.
        """
        while self.pos < self.n:
            c = self.text[self.pos]

            if c == '{':
                # JSX expression: {... JS ...}
                self.pos += 1
                self.parse_js('}')

            elif c == '<':
                n1 = self.peek(1)
                if n1 == '/':
                    # Closing tag </...>
                    end = self.text.find('>', self.pos + 2)
                    if end != -1:
                        self.pos = end + 1
                    return
                elif n1 == '>' :
                    # Nested fragment <>
                    self.pos += 2
                    self._parse_jsx_content()
                elif n1.isalpha() or n1 == '_':
                    # Nested element
                    self.pos += 1  # Skip '<'
                    self._skip_tag_name()
                    is_self_closing = self._skip_tag_internals()
                    if not is_self_closing:
                        self._parse_jsx_content()
                else:
                    self.pos += 1
            else:
                self.pos += 1

    def find_h_args(self, h_open_paren_pos):
        """
        Find argument comma positions in h(...).
        h_open_paren_pos: position of '(' in 'h('
        Returns: (comma_positions, close_paren_pos)
        """
        self.pos = h_open_paren_pos + 1
        commas = []

        while self.pos < self.n:
            # Skip whitespace and comments
            while self.pos < self.n:
                c = self.text[self.pos]
                if c in ' \t\n\r':
                    self.pos += 1
                elif c == '/' and self.peek(1) == '/':
                    self.pos += 2
                    self.skip_line_comment()
                elif c == '/' and self.peek(1) == '*':
                    self.pos += 2
                    self.skip_block_comment()
                else:
                    break

            if self.pos >= self.n:
                break

            c = self.text[self.pos]

            if c == ')':
                close_paren = self.pos
                self.pos += 1
                return commas, close_paren

            if c == ',':
                commas.append(self.pos)
                self.pos += 1
                continue

            # Parse the argument value
            if c == '<':
                n1 = self.peek(1)
                if n1 == '>' or n1.isalpha() or n1 == '_':
                    self._parse_jsx_element()
                    continue

            if c in ('"', "'"):
                self.pos += 1
                self.skip_string(c)
                continue

            if c == '`':
                self.pos += 1
                self.skip_template()
                continue

            if c == '{':
                self.pos += 1
                self.parse_js('}')
                continue

            if c == '(':
                self.pos += 1
                self.parse_js(')')
                continue

            if c == '[':
                self.pos += 1
                self.parse_js(']')
                continue

            # Unknown character – advance past it
            self.pos += 1

        return commas, -1


def remove_fifth_arg_from_h_calls(text):
    """Remove the 5th argument from all h() calls in text."""
    result = []
    search_from = 0

    while True:
        pos = text.find('h(', search_from)
        if pos == -1:
            result.append(text[search_from:])
            break

        # Skip if 'h' is part of a longer identifier
        if pos > 0 and (text[pos - 1].isalnum() or text[pos - 1] == '_'):
            result.append(text[search_from:pos + 1])
            search_from = pos + 1
            continue

        parser = TSXParser(text)
        commas, close_paren = parser.find_h_args(pos + 1)

        if len(commas) >= 4 and close_paren != -1:
            comma4 = commas[3]  # Comma separating arg4 from arg5

            # Find the newline + indentation before the closing paren
            line_start = text.rfind('\n', 0, close_paren)
            pre_close = text[line_start:close_paren] if line_start != -1 else ''

            result.append(text[search_from:comma4 + 1])  # h(ARG1, ARG2, ARG3, ARG4,
            result.append(pre_close)                      # \n          (indent)
            search_from = close_paren                     # continue from )
        else:
            # Not a 5-arg h() call, skip
            result.append(text[search_from:pos + 2])
            search_from = pos + 2

    return ''.join(result)


def main():
    base = Path('/home/user/Mathematische-Grundlagen/src/data/uebungsblaetter')

    # Update shared.tsx: remove kontrolle parameter and entry
    shared_path = base / 'shared.tsx'
    shared_text = shared_path.read_text(encoding='utf-8')
    new_shared = shared_text.replace(
        "export const h = (\n"
        "  konzept: ReactNode,\n"
        "  vorgehensweise: ReactNode,\n"
        "  beispiel: ReactNode,\n"
        "  fehler: ReactNode,\n"
        "  kontrolle: ReactNode,\n"
        "): HintSection[] => [\n"
        "  { icon: '💡', title: 'Konzept verstehen', content: konzept },\n"
        "  { icon: '🔍', title: 'Vorgehensweise', content: vorgehensweise },\n"
        "  { icon: '📝', title: 'Syntax / Beispiel', content: beispiel },\n"
        "  { icon: '⚠️', title: 'Häufige Fehler', content: fehler },\n"
        "  { icon: '✅', title: 'Kontrollfrage', content: kontrolle },\n"
        "]",
        "export const h = (\n"
        "  konzept: ReactNode,\n"
        "  vorgehensweise: ReactNode,\n"
        "  beispiel: ReactNode,\n"
        "  fehler: ReactNode,\n"
        "): HintSection[] => [\n"
        "  { icon: '💡', title: 'Konzept verstehen', content: konzept },\n"
        "  { icon: '🔍', title: 'Vorgehensweise', content: vorgehensweise },\n"
        "  { icon: '📝', title: 'Syntax / Beispiel', content: beispiel },\n"
        "  { icon: '⚠️', title: 'Häufige Fehler', content: fehler },\n"
        "]",
    )
    if new_shared != shared_text:
        shared_path.write_text(new_shared, encoding='utf-8')
        print("Updated shared.tsx")
    else:
        print("WARNING: shared.tsx not modified – pattern not found!")

    # Process all blatt files
    blatt_files = sorted(base.glob('blatt*.tsx'))
    total_modified = 0

    for filepath in blatt_files:
        original = filepath.read_text(encoding='utf-8')
        modified = remove_fifth_arg_from_h_calls(original)
        if modified != original:
            filepath.write_text(modified, encoding='utf-8')
            total_modified += 1
            print(f"Updated {filepath.name}")
        else:
            print(f"No changes in {filepath.name}")

    print(f"\nDone. {total_modified} blatt files modified.")


if __name__ == '__main__':
    main()

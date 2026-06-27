"""
Euklid-Algorithmus zur Bestimmung des ggT. Hacked by A.Gepperth (2025), in 5 Minuten...
"""
import math ;

def ggt(a,b):
  # check auf negative a,b
  a = a if a > 0 else -a ;
  b = b if b > 0 else -b ;

  # initialisiere a_0, a_1
  if a > b:
    a = [a,b]
  else:
    a = [b, a] ;

  # berechne ab a_2
  k = 1 ;
  while True:
    print("k = %d" % (k,), a) ; a.append(0) ;

    # Berechnung hier!
    a[k+1] = a[k-1] % a[k] ;
    if a[k+1] == 0: return a[k] ;
    k += 1 ; 

print("Ergebnis ist: ", ggt(32768,13002)) ;


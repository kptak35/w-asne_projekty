print("1 - na przyprostokątną (a/b)")
print("2 - na przeciwprostokątną (c)")
dzialanie = int(input("Wybierz działanie: "))


if dzialanie == 2:
    a = float(input("Podaj a: "))
    b = float(input("Podaj b: "))
    c = a**2 + b**2
    c = c**0.5
    print(f"c jest równe {c}")
    
elif dzialanie == 1:
    a = float(input("Podaj a/b: "))
    c = float(input("Podaj c: "))
    b = c**2 - a**2
    b = b**0.5
    print(f"a/b jest równe {b}")
    
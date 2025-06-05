i = int(input("Podaj liczbę startową: "))

while i > 1:
    if i % 2 == 0:
        i = i // 2
        print(i)
    else:
        i = i * 3 + 1
        print(i)
    if i == 1:
        print("Pętla!")
        break
        
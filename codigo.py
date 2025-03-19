
cantidad = int(input("¿Cuántas personas querés registrar? "))
personas = []


for i in range(cantidad):
    nombre = input(f"Ingrese el nombre de la persona {i + 1}: ")
    edad = int(input(f"Ingrese la edad de {nombre}: "))
    nota = float(input(f"Ingrese la nota de {nombre}: "))

    personas.append([nombre, edad, nota])


print("\nLista de personas tal como fueron ingresadas:")
for persona in personas:
    print(f"Nombre: {persona[0]}, Edad: {persona[1]}, Nota: {persona[2]}")


personas.sort(key=lambda x: x[2], reverse=True)


print("\nLista de personas ordenada por nota (de mayor a menor):")
for persona in personas:
    print(f"Nombre: {persona[0]}, Edad: {persona[1]}, Nota: {persona[2]}")

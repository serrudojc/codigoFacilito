#Valores booleanos y valor None

#None define un valor vacio, ausencia de valor. Es tomado como valor False
variable = [1,2,3,4]
print(variable)
variable = None
print(variable)

#Falsos False, None, 0, 0.0, "", '', [], (), {}
#El resto de los valores son verdaderos


#************************************************************
#Condicionales

color_luz = 'amarillo'
if color_luz == 'verde':
    print('Puede continuar')
elif color_luz == 'amarillo':
    print('Alto parcial')
else:
    print('Alto total')

#booleanos
variable = True
if variable:
    print('Es verdadero')
else:
    print('Es Falso')


#************************************************************
#Ciclo while

numero = 123456789
contador = 0

while numero >= 1:
    contador+=1
    numero = numero / 10
else:
    print("La cantidad de digitos del número es ", contador)


#************************************************************
#Ciclo for
#objetos iterables: listas, tuplas, strigs, diccionarios

numeros = [1,2,3,4,5,6,7,8,9,10]
for numero in numeros:
    print(numero)


diccionario = {'a':1, 'b':2}
for llave in diccionario:
    print(llave)

valores = ((10,20),["strings","strings"],(True, False))
for valor in valores:
    print(valor)

valores = ((10,20,30),["strings","strings","strings"],(True, False, True))
for valor1,valor2,valor3 in valores:
    print(valor1, valor2, valor3)


#************************************************************
#Funcion Range y enumerate

for valor in range(10):
    print(valor)

for valor in range(1,20):
    print(valor)

for valor in range(-10,10):
    print(valor)

for valor in range(-10,11):
    print(valor)

for valor in range(1,101,2):
    print(valor)

lista = [1,2,3,4,5,6]
for indice in range( len(lista) ):
    print("indice:",indice, "valor:",lista[indice])

for indice, valor in enumerate(lista):
    print("indice:",indice, "valor:",valor)

for indice, valor in enumerate(lista, 10):  #indicamos punto de partida en el indice
    print("indice:",indice, "valor:",valor)



#************************************************************
# Break and continue
titulo = "Curso de Python 3"

for caracter in titulo:
    print(caracter)

for caracter in titulo: 
    if caracter == "P":
        break   #terminamos el ciclo
    print(caracter)

for caracter in titulo:
    if caracter == "P":
        continue    #salto a la siguiente iteracion
    print(caracter)



#************************************************************
# Asignacion de valores mediante if

calificacion = 6 # o usar input()
color = None

if calificacion >= 7:
    color = "Verde"
else:
    color = "Rojo"
print(calificacion, color)


color = "Rojo"
if calificacion >= 7:
    color = "Verde"
print(calificacion, color)


color = "Verde" if calificacion >=7 else "Rojo"
print(calificacion, color)


#************************************************************
#
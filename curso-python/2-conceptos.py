print("hola mundo")

#*********************************************
#Declaracion de variables
tutor = "Codi"
print(tutor)

nombre_tutor = "Codigo"
print(nombre_tutor)

#No existen constantes. Se puede declarar con mayuscula, para darnos cuenta
CONSTANTE = "soy una cte"
print(CONSTANTE)



#**********************************************
#Asignacion multiple
#valor_uno = 10
#valor_dos = "Codi"
#valor_tres = 10*20

valor_uno, valor_dos, valor_tres = 10, "Codi", 10*20
print(valor_uno)
print(valor_dos)
print(valor_tres)



#**********************************************
#Operadores relacionales y logicos
variable_uno = 10
variable_dos = 18

mayor = variable_uno > variable_dos
menor = variable_uno < variable_dos
igual = variable_uno == variable_dos

print(mayor)
print(menor)
print(igual)

resultado = True and True and mayor
print(resultado)

resultado = True or True or mayor
print(resultado)

resultado = not False
print(resultado)

#comparar si dos valores enteros son iguales con palabra reservada is
igual = variable_uno is variable_dos
print(igual)



#**********************************************
#Entrada de datos por teclado. Lo anterior era hardcoding

print("Cual es tu nombre?")
nombre = input()
print("Hola",nombre)    #ya pone espacio. input devuelve valor tipo string

edad = int(input("Cual es tu edad?\n"))
print("Edad",edad)  

peso = float(input("Cual es tu peso?"))
print("Peso",peso)  

autorizado = input("Estas autorizado? (si/no)\n") =="si" #devuelve un booleano
print(autorizado)


#**********************************************
#Comentarios

"""
comentario, lo toma como un string sin usar
Se usa par multipleslineas
"""

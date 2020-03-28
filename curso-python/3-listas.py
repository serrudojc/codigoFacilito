#Listas son estructuras de datos, tipo de datos.

lista = []
#Similar a arreglos, pero pueden cambiar de tamaño y pueden contener 
#distintos tipos de variables



#**********************************************************************
#indices y sublistas

cursos = ["python","django","flask", "c", "c++", "c#", "java", "php"]
curso = cursos[0]
print(curso)

#indices negativos. Se puede recorrer la lista a la inversa
curso = cursos[-1]
print(curso)

#sublista
sub = cursos[0:3]   #[desde:hasta]
print(sub)

sub = cursos[:4]   #parto de cero [:hasta]
print(sub)


sub = cursos[5:]   #[desde:hasta]
print(sub)


sub = cursos[:]   #[desde:hasta] obtengo toda la lista
print(sub)

#saltos en sublistas
sub = cursos[1:7:2]   #[desde:hasta:saltos]
print(sub)

#inverso de una lista
sub = cursos[::-1]   
print(sub)


#**********************************************************************
#sub listas
"""
Estas son las formas en las cuales podemos crear una nueva lista (sublistas) 
a partir de otra.

    [:] Todos los elementos.
    [start:] Todos los elementos desde el índice establecido(start).
    [:end] Todos los elementos desde el índice cero hasta el índice 
    establecido(end).
    [start:end] Todos los elementos de un rango de índices.
    [start:end:step] Todos los elementos de un rango de índices con saltos.

    De igual forma, este listado es aplicable a las tuplas y los strings.
"""


#**********************************************************************
#operadores comunes

lista = [8.17, 90, 1, 5, 44, 1.32]
print(lista)

lista.sort()
print(lista)

lista.sort(reverse=True)
print(lista)

menor = min(lista)
print(menor)

longitud = len(lista)
print(longitud)

resultado = 8 in lista
print(resultado)    #devuelve boolenano

indice = lista.index(8.17)
print(indice)

contador = lista.count(5)
print(contador)


#**********************************************************************
#matrices
fila_uno = [10, 20]
fila_dos = [30, 40]
matriz = [fila_uno, fila_dos]

primer_elemento = matriz[0][0]
print(primer_elemento)

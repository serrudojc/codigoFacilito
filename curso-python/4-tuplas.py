#tuplas
"""
Similar a listas, almacenan diferentes tipo de datos o tuplas.
Diferencia de listas: las tupas son inmutables, no se pueden tocar

tupla = ()

lista =[]
lista.append(valor1)
lista.remove(valor2)

En una tupla no se pueden usar los metodos anteriores.
La ventaja de tuplas es q son mas rapidas
"""

#**********************************************************************
#Valores por indices
tupla = (1,2,3,4,5,6,7,8,9,0)

elemento = tupla[4]
print(elemento)

elemento = tupla[-1]
print(elemento)

sub = tupla[:9:2]
print(sub)


#**********************************************************************
#Comprimir y Descomprimir tuplas
tupla = (1,2,3,4)
uno, dos, tres, cuatro = tupla[0], tupla[1], tupla[2], tupla[3] 
print(uno)
print(dos)
print(tres)
print(cuatro)

uno, dos, tres, cuatro = tupla  #otra forma de hacer lo mismo
print(uno)
print(dos)
print(tres)
print(cuatro)

#tupla con mas elementos. Agrego * al ultimo elemento
tupla = (1,2,3,4,5,6)
uno, dos, tres, *cuatro = tupla 
print(uno)
print(dos)
print(tres)
print(cuatro)

tupla = (1,2,3,4,5,6)
uno, *dos, cinco, seis = tupla 
print(uno)
print(dos)
print(cinco)
print(seis)


#generar tuplas a partir de tuplas y listas
tupla =(1,2,3,4,5,6)
lista = [10,20,30,40]
tupla_dos = (100,200,300,400)
resultado = zip(tupla,lista)    #la funcion zip, nos devuelve un objeto de tipo zip
print(resultado)
#convertimos el objeto a tupla
resultado = tuple(resultado)
print(resultado)    #Tupla q contiene 4 elementos, que son tuplas, que a su vez tienen 2 elementos (de lista y tupla)

resultado = list(resultado)
print(resultado) 

resultado = zip(tupla, lista, tupla_dos)
resultado = list(resultado)
print(resultado) 



#**********************************************************************
#Desempaquetado de tuplas
"""
En ciertas ocasiones tendremos la necesidad de obtener algunos elementos de nuestras
tuplas, por ejemplo, teniendo la siguiente tupla.

tupla = (10, 20, 30, 40, 50)

Necesito obtener el primero, el segundo y el último elemento; 
Para lograr esto tendremos un par de opciones; trabajando con índices y sin ellos. Veamos.

Si trabajamos con índices podemos hacerlo lo siguiente.

primero = tupla[0]
segundo = tupla[1]
ultimo = tupla[-1]

o simplemente podemos reducir las líneas de código y dejarlo en una sola.

primero, segundo, ultimo = tupla[0], tupla[1], tupla[-1]

La segunda opción es dejar de trabajar con las los índices y utilizar el guión bajo _.

primero, segundo, _, _, ultimo = tupla

Como observamos he colocado dos guiones bajos que hacen referencia a el número 30 y 
el número 40, valores que no necesitamos, por en de, no necesito almacenarlos en 
alguna variable; simplemente los ignoramos.

Ahora, que pasa si tengo una tupla mucho más grande y nuevamente necesito obtener
esos tres elementos (el primero, el segundo y el último).

tupla = (10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400)

Lo que podemos hacer es utilizar el guión bajo _ junto con el asterisco * y 
aplicar lo que hemos visto anteriormente.

primero, segundo, *_, ultimo = tupla

De esta forma podemos trabajar de una forma más eficiente con las tuplas.

"""

#**********************************************************************
#De listas a tuplas
lista = ["curso","python","CodigoFacilito"]
tupla = ("Introduccion","basico","listas","tuplas")

nueva_lista = list(tupla)
print(nueva_lista)

nueva_tupla = tuple(lista)
print(nueva_tupla)

#strings a listas o tuplas
mensaje = "Este es un mensajitos"

nueva_lista = list(mensaje)
print(nueva_lista)

nueva_tupla = tuple(mensaje)
print(nueva_tupla)
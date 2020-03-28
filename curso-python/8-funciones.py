#definir funciones
def saluda ():
    print("Hola mundo!")
saluda()


#************************************************************
#Multiples valores de entrada y salida
def crear_mensaje(nombre):
    mensaje = "Hola {}, bienvenido al curso de python 3".format(nombre)
    return mensaje
nuevo_mensaje = crear_mensaje("Juan Carlos")
print(nuevo_mensaje)


def suma(var1,var2,var3):
    return var1 + var2 + var3
print(suma(10,20,30))

def obtener_curso():
    return "Curso de Python", "Basico", 3.6
curso, nivel, version = obtener_curso()
print(curso,nivel,version)


#************************************************************
#Recibir N cantidad de parametros
def crear_usuario(nombre,apellido,edad):
    return{
        'nombre': nombre,
        'apellido': apellido,
        'nombre_completo': "{} {}".format(nombre,apellido),
        'edad': edad
    }
codi = crear_usuario("Codi", "Facilito", 32)

print(codi["nombre"])
print(codi["apellido"])
print(codi["edad"])


#valor por default en un parametro. Se puede omitir el argumento para ese caso
def crear_usuario(nombre,apellido,edad=10):
    return{
        'nombre': nombre,
        'apellido': apellido,
        'nombre_completo': "{} {}".format(nombre,apellido),
        'edad': edad
    }
codi = crear_usuario("Codi", "Facilito")

print(codi["nombre"])
print(codi["apellido"])
print(codi["edad"])

#reglas, NO asignar el valor con espacios (edad = 10)
#Asignacion de valores de izq a der, sin saltos en la asignacion.


#La asignacion de los argumentos será con respecto a la posicion (default)
#Pero se puede asignar los argumentos mdiante el nombre de los parametros
def crear_usuario(nombre='',apellido='',edad=10):
    return{
        'nombre': nombre,
        'apellido': apellido,
        'nombre_completo': "{} {}".format(nombre,apellido),
        'edad': edad
    }
codi = crear_usuario(apellido = 'Facilito')

print(codi["nombre"])
print(codi["apellido"])
print(codi["edad"])


#************************************************************
#Args keyword
#No sabemos el numero de parametros que una funcion pueda recibir:
def suma(val1, val2, val3):
    return val1 + val2 + val3

resultado = suma(10,20,30)
print(resultado)


#El * dentro de una funcion con un parametro, el * agrupará todos los argumentos dentro
# de una tupla, esta tupla será asignada al parametro
def suma(*args):
    total = 0
    print(args)
    for valor in args:
        total+=valor
    return total

resultado = suma(10,20,30,40,50,60,70,80)
print(resultado)

#El uso del * no nos limita el uso de otros parametros, siempre y cuando lo coloquemos en el ultimo
def suma(parametro_requerido,*args):
    total = 0
    print(parametro_requerido)
    for valor in args:
        total+=valor
    return total

resultado = suma("Este es un argumento requerido",10,20,30,40,50,60,70,80)
print(resultado)

#Convencion: al usar * en una funcion, y asignado a un parametro, el nombre es args

#doble asterisco: nos agrupa los argumentos en un dccionario. LLave = parametro
def usuarios_auntenticados(**kwargs):
    print(kwargs)
usuarios_auntenticados(codi=True,facilito=False)

#funciones mas complejas
def combinacion(requerido, *args, **kwargs):
    print(requerido)
    print(args)
    print(kwargs)

combinacion("valor requerido",10,20,valor_uno=True, valor_dos=False)


#************************************************************
#Fomas de terminar una funcion
def mi_funcion():
    print("Un mensaje")
    print("Un mensaje dos")

resultado = mi_funcion()
print(resultado) #Si no especifico a la funcion q retornar, por default retorna None



def mi_funcion():
    print("Un mensaje")
    print("Un mensaje dos")
    return 2

resultado = mi_funcion()
print(resultado) 



def mi_funcion():
    print("Un mensaje")
    return 2
    print("Un mensaje dos")

resultado = mi_funcion()
print(resultado) 



#************************************************************
#Alcance Global
animal = 'leon' #variable global
def mostrar_animal():
    print(animal)

mostrar_animal()
print(animal)



animal = 'leon'
def mostrar_animal():
    animal = "Ballena"  # namespace o contexto local
    print(animal)

mostrar_animal()
print(animal)


animal = 'leon'
def mostrar_animal():
    global animal
    animal = "Ballena"  #modificamos la variable global en el contexto local de la funcion
    print(animal)

mostrar_animal()
print(animal)


#************************************************************
#Expresiones lambdas. Todas las funciones lambda retornan algun valor
def centigrados_a_farhenheit(grados):
    return grados * 1.8 + 32

funcion_variable = centigrados_a_farhenheit #asignamos una funcion a una variable
print(funcion_variable(32))

#funcions lambdas o anonimas
my_funcion = lambda grados=0 : grados*1.8+32

resultado=my_funcion(32)
print(resultado)


#************************************************************
#Lambdas python
"""
Estas son algunas formas en las cuales podemos crear funciones lambdas más complejas.

sin_parametros = lambda : True
con_valores = lambda val, val1=10, val2=10 : val + val1 + val2
con_asterisco = lambda *args : args[0]
con_doble_asterisco = lambda **kwargs : args[0]
con_asteriscos = lambda *args , **kwargs : kwargs.get('key', False)
"""

#************************************************************
#Funcion map
"""
En Python, la función map nos permite aplicar una función sobre los items de un 
objeto iterable (lista, tupla, etc...).

Sintaxis

map(function, objeto iterable)

La función retornará un objeto map que posteriormente podemos convertir a una 
lista o tupla.

def cuadrado(numero):
    return numero * numero

lista = [1,2,3,4,5]
resultado = map(cuadrado, lista)

lista_resultado = list(resultado)
print(lista_resultado)

Es posible utilizar map junto con una función lambda. En lo personal considero
esta la mejor opción.

lista = [1,2,3,4,5]
resultado = map(lambda numero: numero * numero , lista)

lista_resultado = list(resultado)
print(lista_resultado)
"""

#************************************************************
#funciones anidadas
def comenzar_play_list(lista):
    def reproducir():
        for val in lista:
            print(val)

    reproducir()
    print(lista)
lista = ['track 1',"track 2","track 3","track 4"]
comenzar_play_list(lista)

#modificar variables locales
def comenzar_play_list(lista):
    def reproducir():
        nonlocal lista
        lista = [1,2,3]
        for val in lista:
            print(val)

    reproducir()
    print(lista)
lista = ['track 1',"track 2","track 3","track 4"]
comenzar_play_list(lista)


#************************************************************
#Closures
# Cuando una funcion genere dinamicamente a otra funcion, y esta funcion pueda acceder
# a las variables locales aun cuando la primera haya finalizado.
def mostrar_mensaje(mensaje):
    mensaje = mensaje.title() #local
    def mostrar():
        print(mensaje)
    return mostrar

nueva_funcion = mostrar_mensaje("codigoFacilito")
nueva_funcion()


#************************************************************
#Decoradores
#modificar una funcion sin cambiar sus lineas de codigo, Agregar funcionalidades
#necesitamos por lo menos, 3 funciones
# a(b) -> c
#pass especifica por el momento, que nuestra funcion o condiciona no va hacer nada

def decorador(funcion):
    def nueva_funcion():
        print("Podemos agregar codigo antes")
        funcion()
        print("Podemos agregar codigo despues")

    return nueva_funcion

@decorador
def funcion_a_decorar():
    print("Esta es una funcion a decorar")

funcion_a_decorar()


# Intentamos decorar una funcion q reciba n parametros
# colocamos * y **
#Vemos el resultado None de nueva_funcion. Las funciones retornan None por default
def decorador(funcion):
    def nueva_funcion(*args, **kwargs):
        print("Podemos agregar codigo antes")
        funcion(*args, **kwargs)
        print("Podemos agregar codigo despues")
    return nueva_funcion

@decorador
def funcion_a_decorar():
    print("Esta es una funcion a decorar")

@decorador
def suma(val1,val2):
    return val1 + val2

resultado = suma(10,20)
print(resultado)

#Lo que hacemos es almacenar el valor q retorna la funcion decorada suma y retornar el resultado
# Las funciones pueden retornar n cantidad de valores, y esos valores son tupla
# Si la funcion retorna un valor, se almacena en resultado y se retorna.
# Si la funcion retorna n cant de valores, se almacena la tupla y se retorna la tupla
# Si la funcion no retorna valor, se almacena None y se retorna None
#
def decorador(funcion):
    def nueva_funcion(*args, **kwargs):
        print("Podemos agregar codigo antes")
        resultado = funcion(*args, **kwargs)
        print("Podemos agregar codigo despues")
        return resultado
    return nueva_funcion

@decorador
def funcion_a_decorar():
    print("Esta es una funcion a decorar")

@decorador
def suma(val1,val2):
    return val1 + val2

funcion_a_decorar()
print("\n")
resultado = suma(10,20)
print(resultado)

#Al decorar una funcion, recordar que valores agregados debemos de agregar
#Q nuevas caracteristicas queremos agregarle a nuestra funcion (en este caso, mostrar dos mensajes)



#************************************************************
#Generadores
#Tipo especial dde funcion q se usa para la creacion de secuencia de datos que luego se itera
#La secuencia q nos va retornar, es una secuencia qu no definimos, que no se almacena en RAM

def tabla_multiplicar(numero, maximo=10):
    for posicion in range(1,maximo+1):
        yield numero * posicion

for resultado in tabla_multiplicar(9):
    print(resultado)
#Las funciones terminan de dos formas: ejecutandose su ultima linea o mediante return
#lo que hace yield es retornar el resultado de la multiplicacion, sin terminar la funcion
#En ningun momento creamos una variable para imprmir el resultado

#tmb se pueden retornar mas valores
def tabla_multiplicar(numero, maximo=10):
    for posicion in range(1,maximo+1):
        yield numero * posicion,numero,posicion

for resultado, numero, posicion in tabla_multiplicar(9):
    print(numero, "*", posicion, "=",resultado)



#************************************************************
#Documentacion de las funciones
"""
Cómo mencionamos anteriormente, una vez que nosotros definimos una función, podemos llamarla
 n cantidad de veces, inclusive, fuera de nuestro script, cómo lo veremos más adelante 
 (módulos y paquetes) es por ello que una muy buena practica de programación es documentar
  nuestras funciones.

Para que nosotros podamos documentar una función lo haremos mediante un comentario,
 comentario, el cual debe de encontrarse dentro de la función y utilizando triples comillas 
 dobles, cómo podemos observar en el siguiente ejemplo.

def mi_funcion(*args):
  #Esta es la documentación de mi_función
  print(args)

    Recordemos que al utilizar triples comillas dobles podemos colocar un 
    comentario con saltos de línea.

Podemos trabajar con la documentación a través de su atributo ____doc____

print(mi_funcion.__doc__)


Ahora veamos un ejemplo en el cual podemos sacar provecho a nuestra documentación.

def suma(a, b):
    #Función suma
    return a + b

def resta(a, b):
    #Función resta
    return a - b

opciones = {'a' : suma, 'b': resta}
print("Ingrese la opción deseada")

for opcion, funcion in opciones.items():
    mensaje = '{}) {}'.format(opcion, funcion.__doc__)
    print(mensaje)

opcion = input("Opción : ")

Almacenamos las funciones dentro de nuestro diccionario, posteriormente iteramos 
los elementos del diccionario y en cada iteración imprimimos la documentación.
"""
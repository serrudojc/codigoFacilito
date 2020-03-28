#*************************************************************
#POO
#Un objeto es una entidad que posee caracteristicas q lo hace diferente a otros
#Una clase es un molde con el que creamos objetos, con atributos y metodos preestablecidos
# En Python TODO es un objeto


#*************************************************************
#Crear clases
class Usuario:
    pass #pass representa una sentencia nula

codi = Usuario()    #instanciamos un objeto
facilito = Usuario()

print(type(codi))



#*************************************************************
#Metodos
class Usuario:
    def saluda(self, nombre):   #self hace referencia al objeto en si
        print("Hola, soy un usuario "+ nombre)

codi = Usuario() 
facilito = Usuario()

codi.saluda("Codi")
facilito.saluda("Facilito")


#los metodos tmb pueden retornar valores
class Usuario:
    def saluda(self, nombre):  
        return "Hola, soy un usuario "+ nombre

codi = Usuario() 
facilito = Usuario()

print(codi.saluda("Codi"))
print(facilito.saluda("Facilito"))



#*************************************************************
#Atributos
# self hace referencia al objeto. Vamos a generar atributos p/nuestro objeto, fuera de la clase

print('\n Primer ejemplo atributos:')
class Usuario:
    def saluda(self, nombre):   
        return "Hola, soy un usuario "+ nombre
    
    def mostrar_username(self):
        print(self.username)

codi = Usuario() 
codi.username = 'codi'
codi.correo = 'codi@gmail.com'

facilito = Usuario()
facilito.username = 'Facilito'
facilito.correo = 'facilito@gmail.com'

codi.mostrar_username()
facilito.mostrar_username()




#Creando atributos dentro de la clase, dentro de un metodo
print('\n Segundo ejemplo atributos:')
class Usuario:
    def saluda(self, nombre):   
        return "Hola, soy un usuario "+ nombre
    
    def mostrar_username(self):
        print(self.username)

    #muestro en consola el metodo creado
    def mostrar_nombre(self):
        print(self.nombre)

    #creo el atributo
    def crear_nombre(self, nombre):
        self.nombre = nombre

codi = Usuario() 
codi.username = 'codi'
codi.correo = 'codi@gmail.com'

facilito = Usuario()
facilito.username = 'Facilito'
facilito.correo = 'facilito@gmail.com'

#creo el nombre y paso argumento. Luego muestro
codi.crear_nombre("Codigo")
codi.mostrar_nombre()





#metodo init para inicializar atributos. Todos los metodos necesitan un paramtro self.
print('\n Tercer ejemplo atributos:')
class Usuario:
    def __init__(self, username='', correo='', nombre=''):
        self.username = username
        self.correo = correo
        self.nombre = nombre

    def saluda(self):   
        return "Hola, soy un usuario "+ self.nombre
    
    def mostrar_username(self):
        print(self.username)

    def mostrar_nombre(self):
        print(self.nombre)

codi = Usuario("Codi", "codi@gmail.com", "Codigo")  #un argumento para c/paramtro de la funcion 
facilito = Usuario()

resultado = codi.saluda()
print(resultado)




#*************************************************************
#Tipos de atributos : variables de instancia y de clase
print('/n')
class Circulo:
    def __init__(self, radio):
        self.radio = radio

circulo_a = Circulo(10)
circulo_b = Circulo(20)

print(circulo_a.radio)
print(circulo_b.radio)


#si coloco circulo_b.radio = 100, sólo se modifica en el objeto, no se comparten
print('\n')
class Circulo:
    def __init__(self, radio):
        self.radio = radio  #variable de instancia. Pertenecen a la instancia, son independiente entre instancias

circulo_a = Circulo(10)
circulo_b = Circulo(20)

circulo_b.radio = 100

print(circulo_a.radio)
print(circulo_b.radio)



#variables de clase. Le pertenecen a la clase, y puede usarse en cualquier instancia
print('\n')
class Circulo:
    pi = 3.14159265

    def __init__(self, radio):
        self.radio = radio  

circulo_a = Circulo(10)
circulo_b = Circulo(20)

circulo_b.radio = 100

print(circulo_a.pi)
print(circulo_b.pi)

#podemos utilizar estas variables sin necesidad de hacer una instancia
print(Circulo.pi)





#*************************************************************
#Metodos estaticos. Son metodos q se pueden usar sin hacer una instancia
print("\n")
class Triangulo:
    def area(self):
        return (self.base * self.altura)/2

triangulo = Triangulo()
triangulo.base = 10
triangulo.altura = 20

resultado = triangulo.area()
print(resultado)

#si tengo q obtener el area de 1000 triangulos, ncesito 1000 instancias... en vez de eso, hacemos estatico el metodo
#decoramos el metodo
#Como es un metodo estatico, y no le pertenece a la instancia, eliminamos self
#ahora, las variables b y h no existen dentro del metodo, entoces los colocamos como paramtros
#Al ser un metod estatico, no hace faltan instancias

print("\n")
class Triangulo:
    numero = 2  #Si se pueden usar variable de clase, pero NO de instancia
    @staticmethod
    def area(base, altura):
        return (base * altura)/Triangulo.numero

resultado = Triangulo.area(10,20)
print(resultado)


#*************************************************************
#Metodos de clase
#Son metodos similares a metodos esticos. pueden ser llmados sin necesidad de instanciar
# cls no es una palabra reservada, se coloca por convencion. 
print("\n")
class Circulo:
    pi = 3.141592   #variable de clase

    @classmethod    #decoramos el metodo para hacerlo de clase
    def area(cls, radio):  #Los metodos de clase deben recibir un parametro obligatoriamente, hacen referencia a la clase, a Circulo.
        return cls.pi * radio**2 #Circlo.pi

resultado = Circulo.area(10)
print(resultado)

#Usamos metodos de clase cuando necesitemos usar variables de clase



#*************************************************************
#Herencia. 
#Nos permite crear clases a partir de clases existentes
class Animal:
    def comer(sel):
        print("Comiendo")

    def dormir(self):
        print("Durmiendo")

class Perro(Animal):    #Clase(de que clase hereda)
    def __init__(self, nombre):
        self.nombre = nombre

    def ladrar(self):
        print("Ladrando")

class Gato(Animal):
    def ronroneo(self):
        print("ronroneo")

coquito = Perro("Coquito")
coquito.ladrar()
coquito.comer()
coquito.dormir()

garfield = Gato()
garfield.comer()
garfield.ronroneo()



#*************************************************************
#Herencia multiple. Propio de Python
#IMPORTANTE: Como el script se lee de arriba a abajo, las clases de las q estemos heredando deben ir antes
print("\n")
class Animal:
    def comer(sel):
        print("Comiendo")

    def dormir(self):
        print("Durmiendo")

class Mascota:
    def fecha_adopcion(self, fecha):
        self.fecha_de_adopcion = fecha

class Perro(Animal, Mascota):    #Herencia multiple
    def __init__(self, nombre):
        self.nombre = nombre

    def ladrar(self):
        print("Ladrando")

firulais = Perro("firulais")
firulais.fecha_adopcion("hoy")
print(firulais.fecha_de_adopcion)


#Que pasa si nuestras clases que estamos heredando, tiene un metodo con el mismo nombre que hacen cosas diferentes
print("\n")
class Animal:
    def comer(sel):
        print("Comiendo")

    def dormir(self):
        print("Durmiendo")

    def comun(self):
        print("Este es un metodo de Animal")

class Mascota:
    def fecha_adopcion(self, fecha):
        self.fecha_de_adopcion = fecha
        
    def comun(self):
        print("Este es un metodo de Mascota")

class Perro(Animal, Mascota):    #Herencia multiple
    def __init__(self, nombre):
        self.nombre = nombre

    def ladrar(self):
        print("Ladrando")
        
    def comun(self):
        print("Este es un metodo de Perro")

firulais = Perro("firulais")
firulais.comun()    #Vemos el de Perro. Python busca el metodo en la clase principal, si no dentro de las padres de izq a der



#*************************************************************
#Sobre escritura de metodos
#Necesidad de q algun metodo de la clase padre, haya que cambiarlo, sobreescribimos
print("\n")
class Animal:
    def comer(sel):
        print("Comiendo")

    def dormir(self):
        print("Durmiendo")

class Mascota:
    def fecha_adopcion(self, fecha):
        self.fecha_de_adopcion = fecha

class Perro(Animal, Mascota):    
    def __init__(self, nombre):
        self.nombre = nombre

    def ladrar(self):
        print("Ladrando")
    
    def dormir(self):   #metodo de la clase padre y sobreescribimos nuevas acciones
        print(self.nombre, "Está durmiendo")

firulais = Perro("firulais")
firulais.dormir()   #NO quiero ver el mensaje generico. Sobreescribimos

#Primer se busca el metodo dormir dentro de la clase ppal, si no existe, va a buscarlo en las clases padres

#Si necesito agregar mas funcionalidad al metodo de la clase padre
#colocamos las nuevas funcionalidades y colocamos la clase padre punto y el metodo que queremos ejecutar
#pasamos como parametro el objeto, self. Si queremos, podemos agregar mas funcionalidades despues (no molestar)
print("\n")
class Animal:
    def comer(sel):
        print("Comiendo")

    def dormir(self):
        print("Durmiendo")

class Mascota:
    def fecha_adopcion(self, fecha):
        self.fecha_de_adopcion = fecha

class Perro(Animal, Mascota):    
    def __init__(self, nombre):
        self.nombre = nombre

    def ladrar(self):
        print("Ladrando")
    
    def dormir(self):                       #metodo a sobreescribir
        print(self.nombre, "Está durmiendo")#nueas funcionlidades
        Animal.dormir(self)                 #agregar MAS funcionalidades. Clase.metodo(self)
        print("No molestar")

firulais = Perro("firulais")
firulais.dormir()   



#*************************************************************
#Clase Object
# Todas las clases q creemos heredan de una clase comun
# Primera forma de crear una clase
class Gato:
    def __init__(self,nombre):
        self.nombre = nombre

#segunda forma de crear una clase
class Pato(object):
    def __init__(self, nombre):
        self.nombre = nombre

#En ambos casos, las clases heredan de clase object. La clase object posee atributos y metodos
#que podemos identificar, debido a que usar dos guiones bajos al inicio y final, similar a init
# el init no es el Constructor, sino que existe un metodo new similar, en Python.

gato = Gato("Bigotes")
pato = Pato("Lucas")

print(gato)
print(pato)

#Vamos a visualizar las direcciones de memoria, para cambiar esto, hay q sobreescribir el metodo str de object
#trabajamos con metodos de la clase object
print("\n")
class Gato:
    def __init__(self,nombre):
        self.nombre = nombre

    def __str__(self):
        return self.nombre

class Pato(object):
    def __init__(self, nombre):
        self.nombre = nombre

    def __str__(self):
        return self.nombre

gato = Gato("Bigotes")
pato = Pato("Lucas")

print(gato)
print(pato)

#atributo dict, nos muestra todos los atributos de nuestros objetos
print(gato.__dict__)
pato.edad = 15          #agrego otro atributo a pato
print(pato.__dict__)    #

#nuestras clases, se encuentran heredado de una clase en comun

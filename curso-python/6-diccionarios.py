#Que son los diccionarios
"""
Listas, tuplas, diccionarios.
Es una estructura de datos, nos permiten almancenar diferentes tipos de datos.
Son mutables. Los diccionarios no tienen indices, si no mediante una key o llave.
Una llave puede ser cualquier tipo u objeto inmutable en python
"""
diccionario ={}
diccionario = dict()

# { llave : el valor el cual queremos asociar}
diccionario = { "total": 55}
diccionario = {"total": 55, "descuento": True, "subtotal": 15}
diccionario = {"total": 55, 10: "Curso de Python", (1,2,3): True}

#Tmb se pueden usar clases como llaves. El equivalente a JSON en python es diccionario
usuario = {
    'nombre': 'Nombre del usuario',
    'edad': 'Curso de Python',
    'skills':{
        'programacion': True,
        'base_de_datos': False
    },
    'medallas': ['basico','intermedio']
}


#************************************************************
#Como funcionan los diccionarios
diccionario = {}

diccionario["nombre"] = "Codi" #para agregar una llave con su valor
print(diccionario)

valor = diccionario["nombre"]   #obtenemos un valor
print(valor)

diccionario["nombre"] = 90  #Si existe, se reemplaza. Si no existe, se crea.
print(diccionario)

diccionario = {"a":1, "b":2, "c":3, "a":4}  #la llave toma el ultimo valor
print(diccionario)



#************************************************************
#Obtener elementos de un diccionario
diccionario = {"a":1, "b":2, "c":3, "a":4}
resultado = diccionario["a"]
print(resultado)

#si una llave existe en un dccionario, para evitar errores, verificamos:
resultado = "z" in diccionario  #la llave no se encuentra, false
print(resultado)

resultado = diccionario.get("a")
print(resultado)

resultado = diccionario.get("z")
print(resultado)

resultado = diccionario.get("z", "La llave no existe")
print(resultado)


resultado = diccionario.setdefault("a", {})
print(resultado)
print(diccionario)

resultado = diccionario.setdefault("z", {}) #si no existe, lo crea
print(resultado)
print(diccionario)



#************************************************************
# Llaves, items y valores
diccionario = {'a': 1, 'b': 2, 'c':3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8}

#retorna objeto de tipo dict_keys, con las llaves del diccionario
resultado  = diccionario.keys()
print(resultado)

resultado  = diccionario.keys()
resultado = tuple(resultado)    #convierto a tupla
print(resultado)


#ver valores del diccionario. Retorna objeto del tipo dict_values
resultado  = diccionario.values()
print(resultado)

resultado  = diccionario.values()
resultado = tuple(resultado)    #convierto a tupla
print(resultado)


#items. Retorna objeto del tipo dict_items, llaves y valor
resultado  = diccionario.items()
print(resultado)

resultado  = diccionario.items()
resultado = tuple(resultado)    #convierto a tupla
print(resultado)


#************************************************************
# Eliminar elementos
diccionario = {'a': 1, 'b': 2, 'c':3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8}
print(len(diccionario))
print(diccionario)

del diccionario["a"]
diccionario.pop("c")    #pop retorna el valor que fue eliminado

print(len(diccionario))
print(diccionario)

#diccionario = {}    #elimina todo el diccionario
#diccionario.clear() #elimina todo el diccionario
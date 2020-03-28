#Cadenas de caracteres
curso = "Curso de Python 3"
resultado = len(curso)
print(resultado)

resultado = curso[0]
print(resultado)

resultado = curso[-1]
print(resultado)

#podemos generar substrings
resultado = curso[1:16:2]
print(resultado)

#Al igual q las tuplas, los strings son inmutables, no se pueden modificar


#************************************************************
#Trabajo de string como listas

lenguajes = "Python; Java; Ruby; Swift; JavaScript, C#, C, C++"

#el metodo split retorna una nueva lista, divido por un separador (space por default)
resultado = lenguajes.split()
print(resultado)

resultado = lenguajes.split(";")
print(resultado)

separador = "; "
resultado = lenguajes.split(separador)
print(resultado)

#resultado es una lista, ahora vamos a generar un string con esa lista
nuevo_string = " ".join(resultado)
print(nuevo_string)

nuevo_string = separador.join(resultado)
print(nuevo_string)

texto = """Este es un texto
con
saltos
de

linea"""
print(texto)
resultado = texto.splitlines()
print(resultado)



#************************************************************
#Formato para cadenas
texto = "curso de Python 3"

resultado = texto.capitalize()
print(resultado)

resultado = texto.swapcase()
print(resultado)

resultado = texto.upper()
print(resultado)

print(resultado.isupper())
print(resultado.islower())

resultado = texto.title()
print(resultado)

resultado = texto.replace("Python","javasScript")
print(resultado)

resultado = texto.replace("Python","javasScript", 1)    #el tercer valor especifica cuantas veces reemplazar
print(resultado)

#metodo para sacar espacios al inicio o final de la cadena
#resultado = texto.strip()

# % son reemplazados con los valores, por posicion
curso = "Python"
version = "3"

resultado = "Curso de %s %s" %(curso, version)
print(resultado)

resultado = "Curso de {} {}".format(curso, version)
print(resultado)

resultado = "Curso de {a} {b}".format(b=version, a=curso)
print(resultado)


#************************************************************
#Concatenacion
curso = "Curso de Python"
"""
curso = "c" + curso[1:] #generamos otro string
print(curso)

curso = "c" + curso[1:] + " " + "en codigo Facilito."
print(curso)
"""
curso = "c" + curso[1:] +  str(3) + " " + "en codigo Facilito."
print(curso)



#************************************************************
#Busqueda de cadenas
mensaje = "Este es un texto un poco grande en cuanto a longitud de caracteres se refiere"

resultado = mensaje.count("texto")
print(resultado)

resultado = "texto" in mensaje
print(resultado)

resultado = "texto" not in mensaje
print(resultado)

resultado = mensaje.find("text")    #devuelve posicion
print(resultado)

#extraemos una palabra. Si no se encuentra, devuelve -1
resultado = mensaje[resultado: resultado+ len("texto")]
print(resultado)

resultado = mensaje.startswith("Este")
print(resultado)

resultado = mensaje.startswith("E")
print(resultado)

resultado = mensaje.startswith("este")
print(resultado)

resultado = mensaje.endswith("e")
print(resultado)

resultado = mensaje.startswith("nada")
print(resultado)

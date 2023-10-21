---
title: '¿Cuál es la diferencia entre una Fórmula de Excel y una Función de Excel?'
snippet: ''
cluster: false
draft: false 
description: 'Comprende la diferencia entre fórmulas y funciones en Excel. Despeja tus dudas y mejora tus habilidades en hojas de cálculo.'
publishDate: '2015-05-04'
category: 'Fórmulas en Excel'
tags: ['Aprendiendo Excel','Fórmulas','Funciones','🤖 Automatización con Excel']
images: []
resources: 
- name: 'featured-image'
image: {
  src: '/src/assets/images/2023/ry-portada-generica.png',
  alt: 'Raymundo Ycaza'
}
cover: '/src/assets/images/2023/ry-portada-generica.png'
coverAlt: 'Raymundo Ycaza'
domainGroup: automatizacion-con-excel
slug: automatizacion-con-excel/formula-de-excel

---

Normalmente, la primera dificultad que un usuario novato se encuentra en sus inicios, tiene que ver con alguna **[Fórmula de Excel](http://raymundoycaza.com/que-es-una-formula-en-excel/)**.

Y, muy a menudo, me preguntan acerca de cuál es la diferencia entre una Fórmula de Excel y una **Función de Excel**. Es por eso que hoy quiero dejar clara esta diferencia, para que podamos lidiar con esos temas un poco más avanzados y en los que es necesario tener claro este asunto.

## Una Fórmula de Excel

Puede ser descrita como una sentencia, un enunciado. Vamos, una fórmula en Excel es similar a una fórmula en tu libro de matemáticas. Es un conjunto de funciones, números y símbolos matemáticos que colocamos en un orden determinado para realizar un cálculo específico.

Por ejemplo, sabemos que para obtener el área de un círculo, en nuestro cuaderno apuntamos una fórmula como esta:

A = πr²

Que se lee: "El área de un círculo es igual a Pi, multiplicado por el cuadrado de su radio.

Entonces, si le queremos dar un valor al radio, tendríamos:

A = π8²

Y así tendríamos nuestro cálculo listo.

### ¿Cómo sería esta fórmula en Excel?

Primero, quitamos la A, ya que una fórmula en Excel comienza con el signo " = ".

Luego, la constante Pi la obtenemos de una función de Excel, que devuelve el valor de Pi. Esta función -coincidencias de la vida- tiene el nombre de Pi( )

Lo siguiente es que la operación de multiplicación se realiza con el signo " \* ".

Por último, para elevar al cuadrado (o a cualquier otra potencia) utilizamos el símbolo " ^ ", de manera que nuestra fórmula de Excel quedaría de esta forma:

\= Pi() \* 8^2

Como puedes darte cuenta, hemos utilizado una función (la función Pi), dos signos de operación y dos números, como en cualquier fórmula de nuestras queridas clases de matemáticas.

Desde ya, puedes ir dándote cuenta de la diferencia con las funciones, ya que dentro de esta fórmula hemos utilizado una función y la diferenciamos de la fórmula que escribimos.

Si quieres saber más sobre las fórmulas de Excel, puedes [leer más en este enlace](http://raymundoycaza.com/que-es-una-formula-en-excel/).

Entonces, pasemos a conversar sobre las funciones.

## Una función de Excel

Es, por así decirlo, como una fórmula empaquetada.

Una función de Excel es un conjunto de instrucciones que ya vienen incorporadas en la aplicación y realizan varias operaciones para devolver un resultado. Ejemplo de esto, son las funciones SUMAR, CONTAR, BUSCAR, etc.

Resulta interesante saber que también nosotros podemos agregar nuestras propias funciones y las empaquetamos dentro del propio Excel, a [través de macros](http://raymundoycaza.com/escribe-tu-primera-macro-en-excel/), extendiendo el poder de esta herramienta más allá de lo que te habías imaginado en un principio.

Lo espectacular de las funciones es que pueden " anidarse " una dentro de otra, para simplificar fórmulas que, de otra manera, resultarían muy complejas. Además, las fórmulas de serie cuentan con un asistente para facilitarte su uso.

Las funciones están agrupadas por categoría -de acuerdo a su uso- en la ficha " Fórmulas " dentro de la [Cinta de Opciones](http://raymundoycaza.com/la-cinta-de-opciones-de-excel-2010/), que nos permite ubicar rápidamente la función de Excel que necesitamos y las pone a un clic de distancia.

En el ejemplo anterior, ya te mostré cómo se utilizan las funciones combinadas con fórmulas; pero, ¿qué hay acerca de que una función puede simplificar una fórmula?

Supongamos que la fórmula de calcular el área de un círculo es de uso muy frecuente para ti. Debes escribirla todos los días en un nuevo libro de Excel. ¿Por qué no facilitarnos un poco la tarea?

Como ya te había comentado, a [través de macros](http://raymundoycaza.com/escribe-tu-primera-macro-en-excel/) puedes realizar tu propia función. Así que decides hacer tu función definida por el usuario -FDU- y la llamarás " AreaCirculo ". Esta función [recibe como argumento](http://raymundoycaza.com/que-son-los-argumentos-en-excel/) el radio de tu círculo.

Ahora, en lugar de escribir toda la fórmula, solo deberás escribir  " AreaCirculo ( r ) ", donde " r " es el radio de tu circunferencia.

¿Verdad que se ve más limpio?

Ahora quiero que te imagines si la fórmula fuera diez veces más larga. Entonces sí que te resultaría conveniente convertirla en una función que simplifique las cosas.

Ya va quedando más claro, puedo verlo.

## En resumen.

La diferencia entre una fórmula de Excel y una función de Excel, es que la fórmula describe un conjunto de operaciones, mientras que la función **encapsula** todas esas operaciones en un solo "paquete", simplificando la escritura de las fórmulas.

Espero de verdad que esta entrada te ayude a despejar esa duda que tenías respecto de las fórmulas y que de ahora en adelante ya no las confundas más, puesto que son dos de los elementos clave en Excel y cada una tiene su propio rol en esta gran aplicación.

¡Nos vemos!

\[firma\]

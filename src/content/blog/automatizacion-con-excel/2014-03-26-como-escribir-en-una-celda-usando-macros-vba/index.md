---
title: 'Cómo escribir en una celda, usando Macros (VBA)'
snippet: ''
cluster: false
draft: false 
description: 'Aprende a escribir en una celda de Excel mediante macros (VBA). Domina esta habilidad básica para la automatización de hojas de trabajo.'
publishDate: '2014-03-26'
category: 'Macros en Excel'
tags: ['Excel Avanzado','Macros (VBA)','🤖 Automatización con Excel']
images: []
resources: 
- name: 'featured-image'
image: {
  src: 'https://via.placeholder.com/1920x1080/eee?text=16:9',
  alt: 'Raymundo Ycaza'
}
domainGroup: automatizacion-con-excel
slug: automatizacion-con-excel/escribir-en-una-celda

---

\[resumen\]En esta entrada te muestro un ejemplo sencillo de cómo lograr escribir en una celda, a través de las macros, para que comiences a dominar a la fiera.\[/resumen\]

A estas alturas ya no estás para cursos básicos y quieres ir a por todas. Te interesa entrar en el mundo de las macros y quieres un ejemplo sencillo y concreto, para comenzar con pie derecho

¡Muy bien! Vas por buen camino.

Lo que te mostraré hoy será un ejemplo muy básico y sencillo, que te permitirá comprender cómo usar VBA para escribir en una celda (es decir, escribir algo sin utilizar el teclado).

## ¿Y eso? ¿Para qué me sirve escribir en una celda con VBA?

¡Hey! Si estás leyendo esto, imagino que vienes con algo concreto en mente, o de lo contrario estás navegando sin rumbo.

\[tuitealo\]La mejor forma de aprender a usar Excel, es usándolo con un objetivo específico.\[/tuitealo\]

Pero, ¡vamos! Si aprendes a utilizar las macros para escribir en las celdas de Excel, habrás dado tu primer paso en la construcción de tu propia aplicación a medida, la que te servirá como un asistente digital en tus labores cotidianas.

- Puedes, por ejemplo, armar una factura y que guarde todos los datos de los clientes y sus compras en una base de datos.
- También puedes crear tu sistema de tickets  con su respectivo seguimiento.
- Incluso puedes crear un sistema generador de reportes que construya la información automáticamente desde los datos almacenados en tu BD.

¡Eh! Tranquil@

Vamos paso a paso, que así se llega lejos.

¿Has notado que a veces me extiendo un poco más en cosas sencillas?

Esto es porque quiero que prestes más atención y corras menos.

##  Cómo escribir en una celda con VBA, en palabras planas

Primero y, como siempre, vas [ingresar al editor de VBA y crearás un módulo](http://raymundoycaza.com/como-insertar-un-modulo-en-excel/ "Insertar un módulo de VBA") (solo para no perder la costumbre)

Para escribir en la celda que esté seleccionada en ese momento (no importa cuál), este código será suficiente:

Option Explicit

Public Sub escribirConVBA()
    ActiveCell.Value \= "¡Estoy aprendiendo VBA!"
End Sub

### Explicación.

Nota que he creado la función `escribirConVBA()` dentro de la cual está el código que escribe en la celda activa.

La primera parte: ActiveCell, hace referencia a la celda activa o lo que es lo mismo, la celda que está seleccionada en el momento en el que se ejecuta la macro.

La parte que viene después del punto, es decir `Value` hace referencia al valor de la celda o el contenido en su interior.

Ésto quiere decir que `ActiveCell.Value =` , significa algo así como:

\[aviso titulo="" tipo="green"\]El valor de la celda activa será igual a...\[/aviso\]

Y la segunda parte, la que está entre comillas, será el valor que se 'escribirá' en la celda activa. Puede ser lo que tú quieras, desde un texto como en este ejemplo, un número, una fecha o el valor de otra celda. Incluso el resultado de un cálculo.

¿Vas viendo por dónde van los tiros?

¡Sí! Podrías hacer muchas cosas partiendo de ésto.

### Copiar el valor de otra celda.

Vamos a hacer un pequeño cambio. Tratemos ahora de copiar el contenido de la celda A1, en la celda activa. Ésto se logra con el siguiente cambio en el código.

Option Explicit
Public Sub escribirConVBA()
    ActiveCell.Value \= Range("A3").Value
End Sub

Verás que ahora no uso el texto entre comillas, sino que en su lugar uso una referencia a la celda A3.

Una vez más el atributo 'Value' aparece, para indicarnos que el nuevo valor de la celda activa, será el valor que tenga la celda A3.

Si quisieras copiar el valor de otra celda, cualquiera que esta sea, solo tendrías que cambiar la referencia A3 por la que tú necesitas. Verás que después de ejecutar el código, tendrás una copia del valor de dicha celda, en la celda activa.

### Escribir el resultado de un cálculo.

Hagamos una combinación del ejemplo anterior con un cálculo incluido. Ésto es muy común en aplicaciones como las que se usan para crear facturas.

Imagina que en la celda A3 tienes el precio de un artículo y quieres calcular el IVA.

Una vez calculado el IVA, quieres escribir el resultado en la celda activa. Por supuesto, ésto no lo quieres hacer con fórmulas sino con macros.

El ejemplo, para un IVA de 12%, quedaría más o menos así:

Option Explicit

Public Sub escribirConVBA()
    ActiveCell.Value \= Range("A3").Value \* 0.12
End Sub

¡Ajá! Ya se va poniendo interesante.

Con lo que has visto hasta ahora, ya tienes para ir haciendo tus pruebas y concretando ideas que tenías guardadas por ahí.

Pero, vamos viendo un último ejemplo, ¿qué dices?

### Escribir en una celda específica.

Supongamos que no quieres escribir en cualquier celda que esté activa, sino que quieres elegir (mediante el código) en qué celda específica quieres escribir.

¿Se puede?

Si.

Veamos:

Option Explicit

Public Sub escribirConVBA()
    Range("D6").Value \= Range("A3").Value \* 0.12
End Sub

En este último ejemplo, hemos seleccionado la celda D6, en la cual escribimos el resultado de calcular el IVA del precio escrito en la celda A3.

Si quieres escribir en otra celda, bastará con que cambias la referencia D6 por la que tú necesites.

## Concluyendo.

Aprender macros es ahora tu meta. ¡Felicitaciones por ello!

Pero recuerda ir con calma y atendiendo a cada detalle. Deja de estar revisando cientos y cientos de artículos y ponte a practicar. No desesperes por ver ejemplos muy básicos, ya vendrá el tiempo en que sufrirás con los difíciles :D

Es muy importante que te familiarices con los conceptos básicos y con estos temas que son los pilares sobre los cuales construirás tus propias aplicaciones o soluciones, porque el objetivo final, es resolver un problema (o satisfacer un requerimiento si la palabra problema te causa un conflicto filosófico :D )

Mi consejo, es el de siempre: Practica, practica y practica. Pon tus conocimientos al servicio de alguien más, así ayudarás a otros, tendrás ocasión de practicar y aprenderás mucho y más rápido.

¡Nos vemos!

\[firma\]

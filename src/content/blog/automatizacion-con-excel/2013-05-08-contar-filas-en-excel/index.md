---
title: 'Cómo contar filas en Excel, dentro de tu tabla'
snippet: ''
cluster: false
draft: false 
description: 'Aprende a contar filas dentro de una tabla en Excel utilizando código VBA para realizar análisis de datos de manera efectiva.'
publishDate: '2013-05-08'
category: 'Macros en Excel'
tags: ['Macros (VBA)','Trucos Excel','🤖 Automatización con Excel']
images: []
resources: 
- name: 'featured-image'
image: {
  src: 'https://via.placeholder.com/1920x1080/eee?text=16:9',
  alt: 'Raymundo Ycaza'
}
domainGroup: automatizacion-con-excel
slug: automatizacion-con-excel/contar-filas-en-excel

---

Si necesitas contar filas en Excel 2007 / 2010, dentro de tus tablas o un rango con nombre y usando código VBA (macros), esta es una forma de hacerlo.

## Utiliza el nombre de tu tabla

\[twitter style="vertical" source="RaymundoYcaza" hashtag="#Excel" float="left" lang="es" use\_post\_url="true"\] ¿Recuerdas que las tablas en Excel tienen un nombre? ¿Recuerdas que tú puedes [cambiar ese nombre](http://raymundoycaza.com/crear-tablas-en-excel-paso-a-paso/ "Tablas en Excel")?

Pues te cuento que puedes aprovechar ese nombre que tiene tu tabla para hacer mucho más fácil este proceso.

Si utilizas la propiedad Range, pasándole como argumento el nombre de tu tabla, podrás acceder a las propiedades del rango que define tu tabla y contar los registros, así:

`Range("TuTabla").Rows.Count`

La propiedad Range, hace referencia a cualquier rango que esté indicado en el argumento que se le pasa como texto, este puede ser un rango de celdas o un nombre definido. En el caso de una tabla en Excel, le pasaríamos el nombre de la tabla.

Estoy asumiendo que el nombre de tu tabla es 'TuTabla'. Este nombre puede ser el que tú le asignes.

A continuación, utilizo la propiedad 'Rows' que en español significa filas. Dentro de esta propiedad, encontramos un método llamado 'Count', que en español significa contar.

Así, le estoy "diciendo" a Excel que, dentro del rango llamado 'TuTabla', busque el conjunto de filas dentro de él y las cuente.

Toda esta línea de código, devuelve el número de filas existentes en esta tabla y la puedes almacenar en una variable, así:

`TuVariable = Range("TuTabla").Rows.Count`

## El código completo y las buenas prácticas.

No olvides que siempre debes declarar tus variables antes de utilizarlas, créeme, te ahorrarás muchos dolores de cabeza si aprendes desde el inicio a trabajar ordenadamente.

Si tu tabla no será muy extensa, puedes declarar tu variable como un entero, así:

`Dim TuVariable as Integer`

En cambio, si tu tabla será muy extensa o no estás seguro, mejor sería que la declararas como tipo 'Long', así:

`Dim TuVariable as Long`

Entonces, tu código completo, debería quedar así:

`Dim TuVariable as Long TuVariable = Range("TuTabla").Rows.Count`

## ¡Cuéntalo rápido!

Como has visto, utilizar tablas y sus nombres en tu código VBA puede ser mucho más rápido y cómodo que utilizar los rangos puros que, de paso, no serían variables y tendrías que pensar en una forma de hacerlo dinámico. Esto ya lo consigues definiendo una simple tabla.

¡Que lo disfrutes!

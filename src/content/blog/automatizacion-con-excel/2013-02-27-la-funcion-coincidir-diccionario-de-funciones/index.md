---
title: "La Función COINCIDIR &#8211; Diccionario de funciones."
snippet: ""
cluster: false
draft: false
description: "La función COINCIDIR puede resultar más útil de lo que crees. Tómate un par de minutos para aprender a utilizarla."
publishDate: "2013-02-27"
category: "Fórmulas en Excel"
tags:
  [
    "Fórmulas",
    "Funciones",
    "Funciones de Búsqueda y Referencia",
    "🤖 Automatización con Excel",
  ]
images: []
resources:
  - name: "featured-image"
image:
  {
    src: "/src/assets/images/2023/ry-portada-generica.png",
    alt: "Raymundo Ycaza",
  }
cover: "/src/assets/images/2023/ry-portada-generica.png"
featuredImage: "images/ry-portada-generica.png"
coverAlt: "Raymundo Ycaza"
domainGroup: automatizacion-con-excel
slug: automatizacion-con-excel/funcion-coincidir
---

## ¿Qué hace la Función COINCIDIR?

Esta función te ayuda a encontrar un valor en un rango determinado y devuelve su posición dentro de él.

Esto significa que si tienes una lista (horizontal o vertical) de elementos entre los cuales deseas averiguar en qué posición se encuentra uno específico, la **función COINCIDIR** será la apropiada para este caso.

## ¿Cómo se usa?

La sintaxis de la función COINCIDIR, puedes verla en la siguiente imagen: [[Función Coincidir](/src/assets/images/2023/funcion-coincidir-000327-600x177.png)](http://static.raymundoycaza.com/funcion-coincidir-000327.png)

Como puedes ver, esta función utiliza tres [argumentos](http://raymundoycaza.com/que-son-los-argumentos-en-excel/), de los cuales los dos primeros son obligatorios:

1. El primer argumento es el valor que estás buscando.
2. El segundo argumento es el [rango de celdas](http://raymundoycaza.com/que-es-un-rango-en-excel/) en el que necesitas buscar el valor deseado.

El tercer argumento es el tipo de coincidencia. En este argumento tienes tres posibles opciones para elegir:

[[Función Coincidir](/src/assets/images/2023/funcion-coincidir-000324.png)](http://static.raymundoycaza.com/funcion-coincidir-000324.png)

\[unordered_list style="green-dot"\]

- Usar el valor '1 - Menor que'. Si usas esta opción , la función COINCIDIR te devolverá la posición del valor que sea mayor o igual al valor buscado. Ojo, deberías de tener ordenada tu lista de menor a mayor.
- Usar el valor '0 Coincidencia exacta' Si usas esta opción, la función te devolverá la posición del valor que coincida exactamente con el valor buscado. Esta es la opción que normalmente vas a necesitar.
- Usar el valor '-1 Mayor que' Si usas esta opción, la función te devolverá la posición del valor que sea menor o igual al valor buscado. También deberías de tener ordenada tu lista; pero en este caso de mayor a menor.

\[/unordered_list\] \[aviso type="codigo"\]

**Ejemplos de uso** =COINCIDIR("ANTONIO", A1:A100,0) =COINCIDIR("MARIUXI", A1:A100,0) =COINCIDIR("RAYMUNDO", A1:A100,0)

\[/aviso\]

### Ejemplo de uso

En la siguiente imagen te muestro cómo en un listado de nombres, voy a usar la función COINCIDIR para ubicar un nombre en particular:

[[Función Coincidir](/src/assets/images/2023/funcion-coincidir-000325-600x136.png)](http://static.raymundoycaza.com/funcion-coincidir-000325.png)

Nota como estoy indicándole a la función COINCIDIR que busque el valor que está en la celda D1 (mi nombre) en el rango de celdas 'A2:A10' y adicionalmente le estoy indicando que haga una búsqueda exacta.

El resultado es el siguiente:

[[Función Coincidir](/src/assets/images/2023/funcion-coincidir-000326-600x136.png)](http://static.raymundoycaza.com/funcion-coincidir-000326.png)

La función devuelve el número 2, porque 'RAYMUNDO' es el segundo elemento de la lista que le pasé como segundo argumento.

Si escribes otros nombres en la celda celeste, verás como la posición cambia.

### Se me olvidaba:

La función COINCIDIR  no diferencia entre mayúsculas y minúsculas, por lo que será lo mismo escribir RAYMUNDO que raymundo.

También debes tener en cuenta que si no encuentra el valor buscado, te devolverá un error del tipo 'No disponible' (#N/A)

## ¿Para qué me sirve?

Esta función tiene un objetivo claro y ese es el de hallar la posición de un elemento en una lista. Este dato es algo muy básico pero muy útil que te permitirá utilizarlo en combinación con otras funciones y técnicas para crear cosas más avanzadas.

También podrías utilizarlo como reemplazo de la función BUSCARV. El poder que esta función adquiere cuando la combinas con la función INDICE, es arrollador.

## Descarga el archivo.

\[ilink url="http://static.raymundoycaza.com/funcion-coincidir.xlsx" style="download"\]Pincha aquí \[/ilink\] para descargar el archivo usado en el ejemplo.

## Anímate y pon en práctica lo aprendido.

Pon en práctica el uso de esta función y deja volar tu imaginación. Ya verás cómo se te van ocurriendo muchas buenas ideas para aplicar en tu trabajo.

¡Nos vemos!

\[aviso type="creditos"\]

_**¿Quieres saber más?**_

[La función COINCIDIR en Microsoft.](http://office.microsoft.com/es-es/excel-help/funcion-coincidir-HP010062414.aspx)

\[/aviso\]

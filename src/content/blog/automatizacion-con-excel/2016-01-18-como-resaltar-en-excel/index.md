---
title: "Cómo Resaltar en Excel los Fines de Semana."
snippet: ""
cluster: false
draft: false
description: "Aprende a resaltar en Excel los fines de semana de manera fácil y rápida. Optimiza tu productividad y destaca tus resultados."
publishDate: "2016-01-18"
category: "Herramientas en Excel"
tags: ["Formato", "Formato Condicional", "🤖 Automatización con Excel"]
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
slug: automatizacion-con-excel/resaltar-en-excel
---

La flexibilidad que nos brinda Excel para formatear nuestros datos es una de las tantas cosas que nos gusta de esta gran aplicación. Incluso puede ser divertido realizar un reporte con Excel. Veamos cómo resaltar en Excel algo tan simple como los fines de semana.

Sin embargo, cuando tienes que realizar una discriminación de uno o varios parámetros sobre muchos datos, entonces la diversión termina. ¿Verdad?

Pero esto no tiene por qué ser así.

Es por eso que en esta entrada voy a mostrarte cómo puedes, por ejemplo, resaltar los fines de semana en Excel, **y de manera automática**, utilizando el formato condicional.

¡Empecemos!

## Si lo prefieres, mira la versión en video sobre cómo resaltar en Excel

<iframe src="https://www.youtube.com/embed/kMnEY1sUsMg?showinfo=0" allowfullscreen="allowfullscreen" width="560" height="315" frameborder="0"></iframe>

Clic en la imagen para ver el vídeo.

### Resaltando en Excel los Fines de Semana.

Imagina que tienes un listado de fechas como esta que te muestro en pantalla y necesitas resaltar únicamente los fines de semana.

Tal vez lo primero que se te venga a la mente, es que tienes que tomar un calendario y pasarte toda la tarde revisando uno a uno los días y marcando los que se corresponden con un fin de semana.

Pero esto, a más de ser un trabajo muy tedioso, está sujeto a errores ya que podrías equivocarte al momento de observar una fecha o de marcarla en tu hoja de Excel.

Entonces, yo te sugiero que utilices el formato condicional de la siguiente manera:

Selecciona todo el rango en el que se encuentran las fechas.

Ahora ve a la ficha “inicio” y busca la sección “estilos”. En ella encontrarás la opción “formato condicional”.

Haz clic en este botón y en la lista que de despliega elige la opción “nueva regla”.

Ahora selecciona la opción “utilice una fórmula para que determine las celdas para aplicar formato”.

En el cuadro de fórmula que aparece aquí, vas a ingresar el signo “igual” seguido de la función “diasem” y le colocarás los siguientes argumentos:

1.- la celda que contiene la fecha y escribes el separador

2.- escribes el número 2 y cierras paréntesis

3.- ahora escribe el signo “mayor que”, seguido del número 5

Una vez lista esta parte, presionas sobre el botón “formato” y eliges el estilo que quieres que tengan las celdas que contienen fines de semana.

En mi caso, utilizaré letras blancas que estarán sobre celdas rojas.

Ahora que ya estoy satisfecho con mi formato, presiono el botón “aceptar” y en la siguiente ventana, de nuevo “aceptar”.

¿Y por qué funciona esto?

Pues bien, verás:

La función “DIASEM” lo que hace es devolverte el número del día de la semana que corresponde a la fecha que le pasas por argumento.

Es decir que si hablamos del lunes, te devolvería el número 1. Si hablamos del martes, el 2, miércoles 3, etc.

Pero, ¿Quién dice que la semana comienza en lunes?

Esa es la razón por la que escribimos el número 2 como segundo argumento.

Como ves en pantalla, el número 2 aquí nos indica que la semana comienza en lunes y termina en domingo. Así tendríamos una semana en la que el lunes tiene el número 1 y el domingo tiene el número 7.

¿Te queda claro?

¡Bien! Pues ahora en la fórmula que realizamos anteriormente, utilizamos el operador de comparación “mayor que” (>) para “preguntarle” a Excel si es que este número es mayor que cinco.

Por supuesto, el sábado y el domingo son mayores que 5, ya que estos días tienen asignado el número 6 y 7 en la semana. ¿Recuerdas?

Entonces, cuando tengamos una fecha que caiga en día sábado o domingo, esta tendrá un día de semana mayor que 5 y entonces la condición será verdadera y el formato condicional se ejecutará sobre esa celda, pintándola con nuestros colores elegidos.

Así de sencillo.

¿Ves cómo Excel puede quitarte de encima mucho trabajo tedioso con solo un par de trucos?

Anímate y pon en práctica este consejo en tu próximo trabajo con fechas, notarás la diferencia.

¡Nos vemos!

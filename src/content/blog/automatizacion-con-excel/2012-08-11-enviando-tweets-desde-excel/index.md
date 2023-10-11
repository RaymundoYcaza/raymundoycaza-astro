---
title: 'Cómo enviar Tuits desde Excel o un sencillo cliente de Twitter'
snippet: ''
cluster: false
draft: false 
description: '¿Alguna vez habías pensado en usar tu cuenta de Twitter a través de Excel? Pues con esta entrada estarás enviando tuits desde Excel en unos minutos.'
publishDate: '2012-08-11'
category: 'Herramientas en Excel'
tags: ['Fórmulas','Trucos Excel','🤖 Automatización con Excel']
images: []
resources: 
- name: 'featured-image'
image: {
  src: 'https://via.placeholder.com/1920x1080/eee?text=16:9',
  alt: 'Raymundo Ycaza'
}
domainGroup: automatizacion-con-excel
slug: automatizacion-con-excel/tuits-desde-excel

---

Ha llegado el fin de semana y hoy es feriado aquí en Ecuador. Luego de una dura semana de trabajo, quiero relajarme un poco :-)

Por eso, hoy quise distraer la mente creando este cliente básico para Twitter hecho en Excel. Si quieres probarlo ya, ve al final de esta entrada, descárgate el archivo y en un minuto estarás **enviando tuits desde Excel**.

![Enviando Tweets desde Excel](images/twitter-facebook-con-excel-600x3021.png "Cliente Twitter en Excel")

¿Quieres ver cómo funciona? ¡Vamos con ello!

### Enviando tuits desde Excel en 3 pasos:

- En una celda cualquiera, por ejemplo la E5, escribe tu mensaje (que no pase de los 120 caracteres)
- En otra celda, pondrás tu nombre de usuario en Twitter. Yo lo hice en la celda E2
- En la celda G14 ingresa la siguiente fórmula:
    
    \=HYPERLINK(“https://twitter.com/intent/tweet?text=” & SUBSTITUTE(E5,” “,”+”) & “+via+@”&E2,”Enviar a Twitter”)
    

### Explicación de la fórmula

- La función HYPERLINK se encarga de crear un enlace a la dirección que le indiques como primer parámetro y muestra un “Texto Amigable” que se lo indicas en el segundo parámetro.
- La función SUBSTITUTE, la he utilizado para reemplazar todos los espacios por el símbolo ‘+’.
- Al final agrego el texto "via @" y lo concateno con la celda E2, en la cual está escrito nuestro Nombre de Usuario de Twitter para completar la actualización de estado.
- Todo este texto se agrega a continuación de la dirección **https://twitter.com/intent/tweet?text=** para que nos muestre la ventana de actualización con el contenido de nuestro Tweet.

### Usando el archivo

Y eso es todo. Al hacer clic sobre el enlace 'Enviar a Twitter', estarás enviando tuits desde Excel, tal y como has visto en algunas páginas web por ahí. A continuación te dejo un par de imágenes para que veas cómo funciona el archivo.

![Enviando Tweets desde Excel](images/Publica-un-Tweet-en-Twitter-Mozilla-Firefox_2012-08-10_19-59-08-600x2011.png "Publicando el estado en Twitter")

![Enviando Tweets desde Excel](images/Raymundo-Ycaza-M.-RaymundoYcaza-en-Twitter-Mozilla-Firefox_2012-08-10_19-55-391.png "El Tweet publicado")

Este es el enlace para que descargues el archivo terminado y puedas revisar cómo está hecho.

[Pincha aquí para descargar el archivo '**Enviando tuits  desde Excel**'.](http://raymundoycaza.com/descargas/twitter-facebook-con-excel.xls "Descargar archivo 'Enviando Tweets desde Excel")

Imagina lo divertido que puede ser tener tu propio tablero de comandos para estar enviando tuits desde Excel en tus ratos libres.

### ¿Has realizado tu propio cliente de Twitter con Excel?

Ésta es la forma que yo uso para enviar mis tuits, sólo para hacerlo de una forma diferente y divertida ![:-)](images/icon_smile.gif)

¿Has implementado tu propio cliente de Twitter? Anímate a usar los comentarios y cuéntame cómo lo has hecho. Me gustaría ver tu trabajo.

\[aviso tipo="twitter" titulo="Si te ha gustado este dato ¡No lo dudes! Compártelo con tus amigos en Twitter."\]\[tuitealo\]Mira cómo puedes enviar tuits desde Excel, sin usar macros: http://raymundo.me/n\[/tuitealo\]\[/aviso\]

¡Feliz fin de semana!

\[aviso tipo="yellow"\]

En esta entrada se han utilizado las siguientes fórmulas:

HYPERLINK | HIPERVINCULO SUBSTITUTE | SUSTITUIR

Recuerda que en la versión en español generalmente se utiliza el punto y coma en lugar de la coma, para separar argumentos en las fórmulas.

\[/aviso\]

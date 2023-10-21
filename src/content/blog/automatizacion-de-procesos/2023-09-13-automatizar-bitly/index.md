---
title: 'Automatización de Bitly con Google Sheets: Acorta enlaces de forma masiva y gratuita'
snippet: ''
draft: false 
description: 'Acorta enlaces de forma masiva y gratuita con Bitly en Google Sheets. Aprende cómo automatizar tus enlaces y simplificar tu trabajo.'
publishDate: 'publishDate: 2023-09-13'
categories: ['Automatización de tareas repetitivas']
tags: ['Google Sheets',' Bitly',' enlaces',' Apps Script']
domainGroup: automatizacion-de-procesos
category: 'Automatización de Procesos' 
cluster: false
image: {
  src: '/src/assets/images/2023/automatizar-bitly_portada.png',
  alt: 'Raymundo Ycaza'
}
cover: '/src/assets/images/2023/automatizar-bitly_portada.png'
coverAlt: 'Raymundo Ycaza'
slug: automatizacion-de-procesos/automatizar-bitly
---

¿Quieres ahorrar tiempo y esfuerzo al acortar un montón de enlaces usando Bitly?

Hoy te enseñaré cómo automatizar bitly con Google Sheets, creando tu propia herramienta gratuita y fácil de usar que te permite acortar y personalizar tus URLs de forma masiva. Así podrás optimizar tus campañas de marketing digital, medir el rendimiento de tus enlaces y mejorar tu presencia online.

Si prefieres [la versión en video](https://www.youtube.com/watch?v=gmB1fDl8V6g), aquí te la dejo. Pero no te olvides que debajo encontrarás la versión escrita.

¡No te lo pierdas!

youtube gmB1fDl8V6g


[La automatización](/blog/automatizacion-de-procesos) es una estrategia que se ha vuelto indispensable para optimizar tareas repetitivas y tediosas.

Esta técnica no solo ahorra tiempo, sino que también reduce errores, lo que se traduce en una mayor eficiencia, menores costos y más tiempo disponible para enfocarse en lo verdaderamente importante: hacer crecer y mejorar nuestros proyectos.

## Acortar enlaces en Bitly: Más fácil, pero ¿qué sucede cuando son 200 o más?

Si alguna vez te has preguntado cómo acortar una gran cantidad de enlaces en Bitly de manera eficiente, este artículo es para ti. Si bien acortar un enlace en Bitly es un proceso sencillo, puede convertirse en un desafío cuando necesitas acortar un gran número de enlaces, como 200 o más. El método tradicional de copiar y pegar cada enlace original y luego guardar el enlace acortado en una hoja de cálculo de Excel puede resultar en una pérdida significativa de tiempo y la posibilidad de cometer errores humanos.

## Automatizar Bitly con Google Sheets: Tu herramienta gratuita para acortar y personalizar URLs masivamente

La buena noticia es que puedes automatizar este proceso de acortar enlaces en Bitly utilizando Google Sheets, y lo mejor de todo es que es una solución gratuita y fácil de usar. Con esta herramienta, podrás acortar y personalizar tus URLs en masa, lo que te permitirá optimizar tus campañas de marketing digital, medir el rendimiento de tus enlaces y mejorar tu presencia en línea.

### ¿Cómo funciona esta automatización?

#### Paso 1: Preparación del archivo en Google Sheets

1. Abre una hoja de cálculo de Google Sheets.

3. En la primera columna, pega todos los enlaces que deseas acortar.

5. En la segunda columna, se mostrarán los enlaces acortados una vez que se complete la automatización.

image src="images/automatizar-bitly-01.png" width="100%" height="auto"

#### Paso 2: Creación del script con Google Apps Script

- Ve al menú "Extensiones" y selecciona la opción "Apps Script".

image src="images/automatizar-bitly-02.png" width="100%" height="auto"

- En la ventana que se abre, crea una función que llamaremos "acortarURLs".

image src="images/automatizar-bitly-03.png" width="100%" height="auto"

#### Paso 3: Programación del script

A continuación, te dejo el código que debes insertar en tu script:

highlight javascript

// Obtener la hoja de cálculo y el rango de datos
var hoja = SpreadsheetApp.getActiveSpreadsheet();
var hojaDatos = hoja.getSheetByName("hoja 1");
var rangoDatos = hojaDatos.getDataRange();
var datos = rangoDatos.getValues();

// Definir la URL de la API de Bitly
var apiURL = "URL_de_la_API_de_Bitly"; // Reemplaza con tu URL de Bitly

// Definir las cabeceras de la solicitud
var cabeceras = {
  "Authorization": "Bearer TU_CLAVE_DE_API", // Reemplaza con tu clave de API de Bitly
  "Content-Type": "application/json"
};

// Bucle para acortar los enlaces
for (var i = 0; i < datos.length; i++) {
  var urlOriginal = datos[i][0];
  var columnaURL = 1; // Columna donde se colocarán los enlaces acortados

  // Configurar los datos a enviar en la solicitud POST
  var payload = {
    "long_url": urlOriginal
  };

  // Configurar las opciones de la solicitud
  var opciones = {
    "method": "post",
    "headers": cabeceras,
    "payload": JSON.stringify(payload)
  };

  // Realizar la solicitud a la API de Bitly
  var respuesta = UrlFetchApp.fetch(apiURL, opciones);
  var json = JSON.parse(respuesta.getContentText());
  var urlAcortada = json.link;

  // Colocar la URL acortada en la celda correspondiente
  hojaDatos.getRange(i + 1, columnaURL + 1).setValue(urlAcortada);
}
 /highlight 

#### Paso 4: Ejecución de la automatización

Una vez que hayas insertado el código en Google Apps Script, guarda los cambios y ejecuta la función "acortarURLs". Verás cómo los enlaces se acortan de forma automática y se colocan en la segunda columna de tu hoja de cálculo.

## ¿Qué aprendimos hoy?

En este artículo, has aprendido cómo automatizar el proceso de acortar enlaces en Bitly utilizando Google Sheets.

Esta solución gratuita te permite **acortar y personalizar URLs en masa**, lo que puede ser de gran utilidad para optimizar tus campañas de **marketing digital** y mejorar tu presencia en línea.

No pierdas más tiempo realizando esta tarea manualmente; aprovecha la automatización **para ser más eficiente en lo que haces**.

Recuerda que, si prefieres no complicarte con la creación del archivo y el script, puedes descargarlos de forma gratuita en mi blog si te suscribes a la lista de correo.

¡Espero que esta herramienta te sea de gran utilidad y que sigas explorando las posibilidades de la automatización para mejorar tu trabajo!

¡Nos vemos!

🐌

typeit
La automatización, **bien utilizada**, te ayudará a ser [mejor en lo que haces](#).
/typeit

---
title: 'Cómo refrescar todas las Tablas Dinámicas al mismo tiempo.'
snippet: ''
cluster: false
draft: false 
description: '¿Aburrido de Refrescar todas las tablas dinámicas, una por una? No te pierdas este consejo en el que te muestro cómo hacerlo con un sólo clic.'
publishDate: '2013-05-15'
category: 'Macros en Excel'
tags: ['Interfaz de Excel','Macros (VBA)','Tablas Dinámicas','🤖 Automatización con Excel']
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
slug: automatizacion-con-excel/refrescar-todas-las-tablas-dinamicas

---

\[twitter style="vertical" source="RaymundoYcaza" hashtag="#Excel" float="left" lang="es" use\_post\_url="true"\] Las Tablas Dinámicas  son una herramienta imprescindible en el Análisis de Datos con Excel. Por eso no resulta raro que nuestros archivos de Excel tengan muchas de estas tablas.

Cuando cambian los datos, es muy frecuente pasarse mucho tiempo en **refrescar todas las Tablas Dinámicas**, una por una, hasta que los reportes se actualicen por completo. Por esta razón, hoy quiero mostrarte una forma de refrescar todas las tablas de tu archivo de Excel al mismo tiempo y evitarte esos aburridos momentos que tanto merman a tu productividad ;)

### Un clic para refrescarlos a todos.

- Ve a la sección 'Datos' de la cinta.
- Presiona el Botón 'Actualizar todo' (o presiona las teclas CTRL + ALT + F5)
- ¡Está hecho!

Este simple paso, actualiza todas las Tablas Dinámicas que tenga tu archivo de Excel. ¡Realmente un ahorro de tiempo!

### Una línea de código para refrescar todas las tablas.

Si lo que necesitas es **refrescar todas tus tablas dinámicas** a través de macros, puedes hacerlo usando esta línea de código:

- ```
    ActiveWorkbook.RefreshAll
    ```
    
- También puedes usarlo así: `**Workbooks(1).RefreshAll**`para refrescar todas las tablas y conexiones a datos externos del primer Libro de Trabajo.

Si quieres leer más acerca de este tema, visita el siguiente enlace: [Actualizar datos de tablas dinámicas](http://office.microsoft.com/es-es/excel-help/actualizar-los-datos-de-tabla-dinamica-HA101906071.aspx "Actualizar datos de tablas dinámicas")

### ¿Y tú, ya usas esta opción?

Desde que aprendí a utilizar el botón 'Refrescar todo', lo uso para refrescar todas las Tablas dinámicas y conexiones existentes en mi archivo. También hago uso de la línea de código ActiveWorkbook.RefreshAll en mis aplicaciones realizadas con macros. Es un gran ahorro de tiempo y sin duda me quito de encima esos aburridos momentos de **pinchar y esperar.**

¿Qué hay de ti? ¿Utilizas esta característica de Excel? ¿Tienes otros trucos guardados en la manga para el manejo de Tablas Pivot? Me gustaria conocerlos. No lo dudes y compártelo en los comentarios.

---
title: '¿Qué son las fechas para Excel?'
snippet: ''
cluster: false
draft: false 
description: 'Comprende cómo Excel maneja las fechas y su importancia en las hojas de cálculo. Explora este tema fundamental de Excel.'
publishDate: '2013-12-18'
category: 'Fórmulas en Excel'
tags: ['Excel Avanzado','Fecha y Hora','🤖 Automatización con Excel']
images: []
resources: 
- name: 'featured-image'
image: {
  src: 'https://via.placeholder.com/1920x1080/eee?text=16:9',
  alt: 'Raymundo Ycaza'
}
domainGroup: automatizacion-con-excel
slug: automatizacion-con-excel/que-son-las-fechas

---

Sería bueno entrevistar a nuestro querido Excel y poder preguntarle el por qué de tantas cosas que a veces nos hacen verlo como un bicho incomprensible. Como por ejemplo, "¿qué son las fechas para ti?".

Pero como no se puede, seré yo el que irá traduciendo para ti lo que Excel nos "cuenta".

Entonces, comencemos por entender cómo interpreta Excel a las fechas.

Comenzaré diciéndote que para Excel, calcular una fecha es un juego de niños. Y la razón de ésto es porque **las fechas son en realidad números**.

¡Sí! En realidad esas fechas que tú puedes ver en el formato:

_28/5/2013_

Son números a los que se les aplica un tipo especial de formato, para que se muestren de la forma que ya todos conocemos.

Y como también sabes, [Excel es una hoja de cálculo](http://raymundoycaza.com/que-es-excel/ "¿Qué es Excel?"), por lo tanto, le encantan los números. Así es que al ser las fechas una cifra más, los cálculos con éstas son realmente rápidos.

## A ver si nos entendemos, ¿cómo puede Excel transformar un simple número a fecha?

Lo que en realidad hace Excel es tomar **una fecha de referencia** a la cual le sumamos un número de días y entonces calcula la fecha actual.

¿Complicado?

Veamos un ejemplo.

Escribe en una celda la fecha 1/1/2013. Como ves, todo normal. En la barra de fórmulas podemos ver la fecha en el mismo formato de siempre. Entonces, ¿dónde está el dichoso número?

Vamos a revelarlo. Pincha sobre la celda en la que escribiste la fecha y haz un clic derecho, selecciona "Formato de celdas..." y en el tipo de datos, elige "General".

Verás que ahora Excel te muestra el número **41275**. ¿Qué significa ésto?

Significa, ni más ni menos, que **es el día número 41,275** que ha transcurrido desde la fecha de referencia que tiene Excel.

### ¿Y cuál es ésta fecha de referencia?

¡El 1 de enero de 1900! O lo que es lo mismo:

_1/1/1900_

### El primero y el último día para Excel.

Entonces, como ya te conté, el primer día para Excel será el 1/1/1900 **y a éste le va a asignar el número 1**.

Por lo tanto, el número 2 será el 2/1/1900 y así sucesivamente.

Haz la prueba, escribe varios números al azar y luego dales un formato de fecha. Verás como obtienes distintas fechas y si te pones a hacer los cálculos, notarás que cada uno se corresponde con el número de días después de esa fecha en el calendario.

¿Y el último día en Excel? Es el 31/12/9999 al cual se le ha asignado el número 2'958,465.

Ahora ya sabes por qué. ;)

**Información:** **Aviso:** Si tratas de escribir una fecha inferior al **1/1/1900** o superior al **31/12/9999**, Excel no podrá reconocerlo como una fecha.

### Sumando y restando fechas.

Entonces, si las fechas son números asignados de acuerdo a lo que te conté, sumar y restar fechas en Excel es tan sencillo como sumar y restar números entre sí. Simples números planos. Por eso, es válido decir que:

_18/4/2014 - **7** = 11/4/2014_

Porque sería lo mismo que decir:

_41,382 - 7 = 41,375_

Y si tu le aplicas formato de fecha al número 41375 verás que se transforma en la fecha **11 de abril de 2014**.

¡Interesante! ¿No l crees?

### Ok, pero ¿y si quiero restar horas o minutos? ¿Cómo es que lo hace Excel?

¡Decimales!

Así es. Si las horas, minutos y segundos no son más que las fracciones de un día, entonces éstos se transforman a la parte decimal de un día y se hace la suma o la resta normalmente.

Es decir, supongamos que quieres restarles 12 horas a un día.

Como 12 horas es la mitad de un día o, lo que es lo mismo: 12 horas divididas entre 24 horas que tiene un día es igual a **0.5**.

Entonces:

_41,375 - **0.5** = 41,374.5_

Si formateas como fecha-hora el número 41375, tendrás lo siguiente:

_4/10/13 12:00 PM_

¡Wow! Ahora sí que voy entendiendo esto.

## He ahí el misterio de las fechas.

Ahora, ya está respondida la pregunta "¿qué son las fechas para Excel?". Con ésto en claro, entender cómo se trabaja con las distintas técnicas y funciones se te hará mucho más sencillo y sobre todo, no te confundirás cuando veas un archivo con fechas, que se ha quedado sin formato.

Haz tus propias pruebas y verás cómo te van llegando ideas sobre nuevas formas de trabajar con tus archivos, considerando los cálculos con fechas.

¡Que la creatividad te acompañe!

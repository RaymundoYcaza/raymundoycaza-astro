---
title: 'Cómo crear un Gráfico en Excel'
snippet: ''
description: 'Crear un gráfico en Excel no tiene que ser un martirio. Con esta entrada te muestro la forma de hacerlo en tan sólo 3 pasos.'
publishDate: '2013-07-22'
category: 'Gráficos en Excel y Presentación de Datos'
tags: ['#Destacado', '#Excel Avanzado', '#Excel Básico', '#Gráficos', '#Gráficos Avanzados', '#Presentación', '#🤖 Automatización con Excel '] 
image: {
  src: '/src/assets/images/2023/grafico-en-excel_portada.png',
  alt: 'Cómo crear un Gráfico en Excel'
}
cover: '/src/assets/images/2023/ry-portada-generica.png'
coverAlt: 'Cómo crear un Gráfico en Excel'
domainGroup: automatizacion-con-excel
slug: automatizacion-con-excel/grafico-en-excel
cluster: false
draft: false
---

Si recién estás [comenzando con Excel](http://raymundoycaza.com/cursos-gratuitos-de-excel/ "Curso básico de Excel") o no lo usabas desde hace un buen rato, es probable que tengas problemas con tu primer gráfico.

Con esta entrada, pretendo mostrarte cómo puedes **crear un gráfico en Excel** sin dar más vueltas de las necesarias.

## Crear un gráfico en Excel en 3 pasos

Como te dije, vamos a hacerlo sin dar muchas vueltas; por lo tanto, vamos a crear nuestro gráfico en 3 pasos, sin modificar sus parámetros por defecto. Esto es lo que haremos siempre que no se trate de ningún tipo de _[**gráfico especial**](http://raymundoycaza.com/graficar-en-excel-una-manera-distinta/ "Gráfico diferente.")._

- 1
    
    #### Seleccionar los datos que quieres graficar
    

Primero vas a seleccionar el **[rango de datos](http://raymundoycaza.com/que-es-un-rango-en-excel/ "Entonces, ¿qué es un rango en Excel?")** que quieres graficar, ‘sombreándolos’ con el ratón. Para este ejemplo voy a utilizar una [tabla de datos](http://raymundoycaza.com/las-tablas-en-excel/ "Las tablas en Excel") que tiene sólo dos columnas: la que tiene los nombres de etiqueta (columna Mes) y la que tiene los datos (columna Índice).

Pueden ser más columnas; pero si son demasiadas el gráfico perderá en claridad.

[gráfico en Excel](/src/assets/images/2023/grafico-en-excel-001.png "Seleccionar los datos")

Es importante que tengas en cuenta lo siguiente:

1. Es mejor que tengas definidos tus propios nombres en una columna, como en el ejemplo, para que Excel asigne correctamente las etiquetas.
2. Los **datos numéricos** deben estar ingresados como números y no como texto.

2

#### Elegir el tipo de gráfico

Una vez que tienes seleccionados los datos y has verificado que todo esté correcto, vas a insertar el gráfico. Para encontrar la opción de insertar gráficos en Excel, debes seguir esta ruta:

1. Pestaña **Insertar**
2. Te diriges a la sección **Gráficos** y eliges el tipo de gráfico. Para mi caso, elegiré gráfico de **Columnas**.
3. Selecciona el subtipo de gráfico. Como vamos a mantenerlo sencillo, seleccionaremos el subtipo **2-D Column** (Columna en 2D)

[Gráfico en Excel](/src/assets/images/2023/insertar-un-grafico-en-3-pasos-600x176.jpg)

3

#### Verificar que todo ha salido bien

Hasta aquí todo está listo. Ya casi has terminado. Lo único que tienes que hacer es revisar que tu gráfico haya quedado bien y no tenga ‘cosas raras’.

Como puedes ver en la imagen final, los nombres de los meses se han colocado en el eje horizontal, mientras que en el eje vertical se ha generado automáticamente un rango de datos, basándose en los datos de tu [tabla](http://raymundoycaza.com/las-tablas-en-excel/ "Tablas en Excel").

También puedes ver que el nombre de nuestra columna **Índice** (la que tiene los valores numéricos) aparece a la derecha, indicándonos que todas las barras azules corresponden a esta serie de valores.

[gráfico en Excel](/src/assets/images/2023/grafico-en-excel-002.png "Gráfico creado")

**¿Te gusta lo que estás leyendo?**

**Lo bueno se comparte.**

**¡Tuitéalo ahora:**

\[clickToTweet tweet="Estoy aprendiendo cómo se hace un gráfico en #Excel, justo aquí: http://bit.ly/1c7sYYF" quote="Estoy aprendiendo cómo se hace un gráfico en Excel, justo aquí: http://bit.ly/1c7sYYF"\]

Si en lugar de una columna de valores tuviéramos dos, Excel le asignaría un color distinto a cada una para que sea fácil diferenciar las series de datos. Esto sería igual para tres, cuatro o ‘n’ columnas.

En el siguiente gráfico he agregado la columna **Incremento** para mostrarte un ejemplo de lo que acabo de comentarte.

[gráfico en Excel](/src/assets/images/2023/grafico-en-excel-003.png "Gráfico con dos series")

_Nota como ha cambiado el rango de valores de el eje vertical de nuestro gráfico, ahora va desde 0 hasta 16. Esto Excel lo ha hecho para adaptarse a los nuevos valores de nuestro gráfico._

## Posibles problemas (y sus soluciones)

Cuando creas un gráfico por primera vez, sueles encontrarte con algunos problemas comunes que podrían terminar arruinándote la tarde ;)

A continuación te expongo algunos de estos posibles problemas y **sus soluciones**.

### Excel no me muestra las series

[gráfico en Excel](/src/assets/images/2023/grafico-en-excel-004.png "Gráfico sin series")

En ocasiones nuestro gráfico de Excel puede lucir como muestra la imagen anterior. Esto generalmente se debe a que los datos en la columna de valores están ingresados como texto y no como número.

Si conviertes los datos a número utilizando la opción _**[Texto a columna](http://raymundoycaza.com/como-separar-un-texto-en-excel/ "Texto a Columna")**_, probablemente se solucione sin mayores contratiempos. Sin embargo, suele suceder que el origen de este problema está en el separador decimal.

**¿Qué quiero decir con esto?**

En la imagen anterior, si te fijas bien, notarás que los valores decimales están separados por una coma; pero la **Configuración Regional** de mi laptop indica que el separador de decimales es el punto.

Al usar un carácter que no es reconocido como el separador de miles, Excel interpreta esto como una cadena de texto, por lo tanto, no puede hacer cálculos sobre estos datos y, en consecuencia, no los muestra en la gráfica. En estos casos para Excel no hay nada que mostrar.

**Solución**: Reemplaza el separador actual por el correcto.

**Consejo**: Si tienes muchos datos como para hacerlo manualmente, selecciona el rango en el que se encuentran y presiona CTRL + L. En el cuadro de diálogo que aparece, le indicarás que reemplace las comas por puntos (o al revés, si tu caso es el contrario)

[Gráfico en Excel](/src/assets/images/2023/insertar-un-grafico-en-3-pasos-002.jpg)

### Sólo tengo una columna de valores; pero Excel me muestra dos.

[gráfico en Excel](/src/assets/images/2023/grafico-en-excel-005.png "Cuando se tienen números en la columna de nombres")

Como puedes ver en la imagen anterior, a pesar de que el gráfico tiene una sola columna de valores (la columna Porcentaje), Excel nos muestra dos series en nuestro gráfico.

Cuando esto sucede, es porque está considerando la columna **Código** como una serie de datos y no como una columna de nombres. Generalmente, esta situación se da por dos cosas:

1. Los nombres son números.
2. La columna tiene un nombre.

Estas dos características le están indicando a Excel, que lo que tiene en este lugar se trata de una columna de valores, es decir, nosotros mismos le estamos ‘pidiendo’ a Excel que lo grafique, aunque no sea nuestra intención.

La solución a esto sería eliminar al menos una de estas dos condiciones que te indiqué anteriormente, por ejemplo:

 

#### Solución #1

Podemos eliminar el título de la columna que no debe graficarse, antes de insertar nuestro gráfico.

[gráfico en Excel](/src/assets/images/2023/grafico-en-excel-006.png "Solución #1")

#### Solución #2

Convertir los datos de la columna mencionada a tipo texto, con la opción **Texto a columna,** y nuevamente insertar nuestro gráfico.

[gráfico en Excel](/src/assets/images/2023/grafico-en-excel-007.png "Solución #2")

### El gráfico aparece totalmente en blanco

[gráfico en Excel](/src/assets/images/2023/grafico-en-excel-008.png "Gráfico en Blanco")

Esto generalmente sucede porque olvidaste seleccionar el rango con los datos antes de insertar el gráfico. Puedes solucionarlo simplemente eliminando el gráfico actual y repitiendo el proceso, pero esta vez con un rango seleccionado siguiendo los tres pasos que te indiqué anteriormente.

## Nuestro gráfico en Excel está listo

Has terminado de crear tu primer gráfico en Excel. Ahora debes practicarlo varias veces para que los pasos se queden ‘grabados’ y pronto sea un procedimiento natural para ti.

Con este proceso básico, harás la mayoría de tus gráficos en Excel. Por supuesto existen [otras formas de crearlo](http://raymundoycaza.com/seccion/graficos-avanzados/ "Gráficos Avanzados"); pero en esta entrada te he mostrado la que me pareció más sencilla.

Sigue jugando con Excel y haz pruebas, **juega con él**. Esta es la mejor manera de llegar a conocerlo.

## ¿Quieres descargar el archivo terminado?

[Pincha aquí para descargar.](http://raymundoycaza.com/wp-content/uploads/como-hacer-un-grafico-en-excel.xlsx "Pincha aquí para descargar el archivo.")

## ¿Qué otros problemas has tenido con los gráficos?

Yo te comenté sobre unos cuántos problemas con los que es común que las personas se encuentren durante la creación de sus primeros gráficos en Excel. Si a ti se te han presentado otros problemas distintos a los que he mencionado, me gustaría que me lo dejaras saber y así ampliamos un poco más el tema.

## ¿Y ahora, qué paso seguir?

¡No te quedes allí! Continúa profundizando en el manejo de esta espectacular herramienta y aprende a sacarle el máximo provecho. Si no sabes cuál es el siguiente paso, aquí te dejo unas cuántas opciones:

- [Tipos de gráfico en Excel.](http://raymundoycaza.com/tipos-de-graficos-en-excel/) - Aprende cuáles son las opciones más comunes de gráficos que puedes hacer en Excel.
- [¿Cómo agrego datos a mi gráfico, después de haberlo creado?](http://raymundoycaza.com/agregar-datos-graficos-de-excel/ "Cómo agregar datos a mi gráfico") - Buena pregunta. ¿Quieres una respuesta? Haz clic en el enlace y averíguala.
- [Partes de un gráfico: Conocer al enemigo.](http://raymundoycaza.com/partes-de-un-grafico/ "Las partes de un gráfico") - Si tienes dificultades para crear un gráfico, es porque no lo conoces lo suficiente. Comencemos por averiguar cómo está formado.
- [¿Cómo le agrego un título a mi gráfico?](http://raymundoycaza.com/como-agregar-un-titulo-al-grafico/ "Cómo agregar un título a tu gráfico") - Un gráfico necesita un título (casi siempre) aprende aquí cómo ponerle uno al tuyo.
- [¿Existen otras formas de crear un gráfico?](http://raymundoycaza.com/crear-un-grafico-de-columnas-en-excel/ "Otras formas de crear un gráfico") - ¡Claro! Aquí te muestro una de ellas!
- [¡El eje de mi gráfico no ha quedado como esperaba!](http://raymundoycaza.com/cambiar-la-escala-del-eje-horizontal/ "Cambiar la escala de mi gráfico") - ¿Problemas, mi pequeño saltamontes? No te preocupes, aquí encontrarás la solución.
- [¿Se pueden resaltar los puntos máximo y mínimo en un gráfico?](http://raymundoycaza.com/maximo-y-minimo-en-grafico/ "Resaltar los puntos máximo y mínimo en un gráfico.") - ¡Ah! Te estás haciendo valiente. ¡Genial! Aquí te mostraré un truco genial para que no se pierdan los extremos en tu gráfico.
- [Vamos por algo más difícil: ¿Y si quiero hacer un gráfico intercambiable?](http://raymundoycaza.com/crea-tu-propio-grafico-dinamico-en-excel/ "Crear un gráfico intercambiable en Excel") - ¡Palabras mayores! O... ¿no tanto? Con mi ayuda verás que es muy sencillo de lograrlo.
- [¿Y si quiero hacer un diagrama de Gantt?](http://raymundoycaza.com/crear-un-diagrama-de-gantt-en-excel/ "Cómo crear un diagrama de Gantt en Excel") - ¿Qué? ¿Con un gráfico de Excel? ¡Sí! Y es muy sencillo. Haz clic y sigue leyendo.
- [Haciendo gráficos más complejos.](http://raymundoycaza.com/graficar-en-excel-una-manera-distinta/ "Cómo hacer gráficos especiales en Excel") - Qué lejos quedaron aquellos días en que se te hacía difícil crear un gráfico en Excel. ¿O fue hoy mismo? Haz clic y aprende cómo se pueden hacer gráficos que ni te imaginabas que podían lograrse con Excel.
- [La cereza del pastel: ¿Un barco navegando dentro de un gráfico?](http://raymundoycaza.com/dibujar-un-barco-en-grafico/ "Dibujar un barco en un gráfico de Excel") - ¿Y para qué? Pues te cuento que todo en esta vida, puede tener alguna utilidad. Aunque solo sea por aprender con diversión. Haz clic y entérate de cómo puedes poner tu barco a navegar, como si fuera una pintura de Narnia :D

## El último paso, lo das tú.

Si te ha gustado esta entrada, puedes ayudarme **compartiéndolo en las redes sociales** usando los botones de Facebook y Twitter que verás abajo de este artículo. ¡Te lo agradeceré! :)

¡Nos vemos!

\[firma\]

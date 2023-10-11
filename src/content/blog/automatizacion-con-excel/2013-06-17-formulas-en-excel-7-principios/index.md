---
title: '7 Principios básicos para trabajar con fórmulas en Excel'
snippet: ''
cluster: false
draft: false 
description: 'Si eres nuevo en el uso de fórmulas en Excel, no te puedes perder estos principios sobre los cuales se basa todo el manejo de las mismas.'
publishDate: '2013-06-17'
category: 'Fórmulas en Excel'
tags: ['Excel Básico','Fórmulas','🤖 Automatización con Excel']
images: []
resources: 
- name: 'featured-image'
image: {
  src: '/src/assets/images/2023/formulas-en-excel_portada.png',
  alt: 'Raymundo Ycaza'
}
domainGroup: automatizacion-con-excel
slug: automatizacion-con-excel/formulas-en-excel

---

Si eres nuevo en el uso de fórmulas en Excel, no te puedes perder estos principios sobre los cuales se basa todo el manejo de las mismas. Una lista que deberías tener a la mano para referencia rápida ;)

\[twitter style="vertical" source="RaymundoYcaza" hashtag="#Excel" float="left" lang="es" use\_post\_url="true"\]Normalmente, cuando comenzamos a utilizar las [fórmulas en Excel](http://raymundoycaza.com/que-es-una-formula-en-excel/ "¿ Qué es una fórmula en Excel ?"), solemos olvidar algunos principios básicos que, obviamente, terminan generando un error en nuestro trabajo y una gran sensación de frustración al cabo de un rato.

A continuación te dejo un listado de 7 principios básicos sobre los cuales debes cimentar tu aprendizaje de las fórmulas y, debes saber, que si no respetas estos principios, tendrás más de un dolor de cabeza por el camino :)

### 1.Cada fórmula en Excel, debe comenzar con el signo =

Una fórmula que no tiene por delante el signo =, se considera un texto literal, tal cual lo has escrito y nada más. ¿No te queda claro? Veamos un ejemplo:

Si en la celda A1 tienes el número 8 y en la celda A2, tienes el número 2, podemos aplicar la siguiente formula en la celda A3:

`=A1 + A2`

Y obtendríamos la sumatoria de las dos celdas anteriores, es decir, nos devolvería 10. Sin embargo, si en la misma celda A3 hubiéramos escrito lo siguiente:

`A1 + A2`

Lo que obtendríamos sería el valor tal cual lo hemos escrito.

**\[aviso type="recuerda"\]Recuerda**: Una fórmula introducida en una celda con formato de texto, no será evaluada, aunque tenga por delante el signo =.\[/aviso\]

### 2\. Una fórmula de Excel puede contener números (valores constantes) o referencias a otras celdas.

Por ejemplo, la formula:

`=A1 = 20`

Contiene una referencia y un número.

A1 tiene el valor del contenido de la celda A1, mientras que el número 20 es siempre 20. En otras palabras, se trata de un valor constante.

La ventaja de usar referencias, es que puedes cambiar el resultado de tus fórmulas con solo cambiar los valores de las celdas a las que hace referencia la fórmula.

Si no se usaran referencias, tendrías que estar editando la fórmula cada vez y una por una. ¿Una pesadilla, no lo crees? :)

\[box type="note"\]¿No tienes claro lo que son las referencias? Entonces échale un vistazo a [este artículo](http://raymundoycaza.com/que-es-la-referencia/ "¿Qué es la referencia?").\[/box\]

### 3\. Una fórmula de Excel puede ser en su totalidad una expresión matemática, contener funciones o una combinación de ambas.

Una expresión matemática simple, podría verse como esto:

`=(A1 + A2 + A3 + A4) / 4`

Mientras que la misma operación, realizada con una función de Excel, luciria asi:

`=PROMEDIO(A1:A4)`

Ambas fórmulas te darían el mismo resultado: El promedio de las celdas A1, A2, A3 y A4.

### 4\. Los argumentos se separan con punto y coma (o con coma, si tienes Excel en inglés) y tienen que ser colocadas de acuerdo a un orden específico.

Este orden lo define la sintaxis de cada función.

\[box type="note"\]¿No sabes lo que es un argumento? Entonces [pásate por aquí.](http://raymundoycaza.com/que-son-los-argumentos-en-excel/ "¿ Qué son los argumentos en Excel ?")\[/box\]

Esto quiere decir que cuando utilices una función, debes asegurarte de colocar los argumentos de acuerdo a como lo exige la sintaxis de la función que estés utilizando. Es muy importante que revises la ayuda de Excel o consultes en alguna otra base de conocimientos sobre dicha sintaxis, antes de usar una nueva función.

### 5\. El resultado de las fórmulas de Excel son devueltas en la misma celda en la que fueron escritas.

Tal vez esto llame tu atención, pues esperabas que en un lugar se escriba la fórmula y el resultado se mostrara en otro. Pero en este sentido, Excel funciona tal cual funciona una calculadora. Tú ingresas todos los operandos y operadores, para mostrar el resultado en el mismo lugar.

**\[aviso type="recuerda"\]Recuerda**: Excel no va a resolver la fórmula si los argumentos de alguna función están incompletos. Recibirás un mensaje de error si has olvidado algo. Si todo ha ido bien, se mostrará el resultado inmediatamente.\[/aviso\]

### 6\. Una fórmula de Excel no se puede “ver”.

Una vez que has escrito la fórmula y has aceptado presionando la tecla “Enter”, lo que verás es el resultado de la fórmula escrita. Si quieres ver como ha quedado tu fórmula después de esto, solamente está visible en la [barra de fórmulas](http://raymundoycaza.com/la-barra-de-formulas/ "La Barra de Fórmulas en Excel") o si pulsas la tecla F2 entrarás nuevamente al modo de edición de la celda y se mostrará la formula una vez más.

A pesar de que no se muestra la fórmula directamente en la celda, hay una forma de lograr esto, usando el atajo de teclado CTRL+\` (comilla simple izquierda), Excel pasará al modo de mostrar fórmulas en celdas y podrás ver todo lo que has escrito dentro de tu fórmula en lugar del resultado.

### 7\. Excel realiza los cálculos en un orden establecido.

Si combinas varios operadores en una misma fórmula, Excel realizará las operaciones en el siguiente orden:

- Negación (Falso o -1)
- % Porcentaje.
- ^ Potenciación.
- Multiplicación, División.
- Suma y resta.
- Comparación (=, <>, <=, >=)

En el caso de que una fórmula tuviera operaciones con la misma prioridad de cálculo, es decir, si una fórmula tiene un operador de multiplicación y uno de división, Excel evaluará los operadores siguiendo el orden de izquierda a derecha.

Si quieres controlar el orden de evaluación, debes utilizar los paréntesis para darle prioridad a dicho grupo de operaciones.

Por ejemplo, en la siguiente fórmula:

`= 8 + 2 * 4`

El resultado es 16, porque primero se resuelve la multiplicación (2 x 4 = 8) y luego la suma (8 + 8 = 16)

Pero si tú quieres que la suma se realice primero, debes hacer uso de los paréntesis, así:

`= (8 + 2) * 4`

En este caso, la suma tiene prioridad, por lo que se resuelve primero (8 + 2 = 10), para luego resolver la multiplicación (10 \* 4 = 40)

¿Gran diferencia, verdad? Esta es una de las razones por las que, a veces, un usuario novato tiene resultados erróneos en sus fórmulas.

## Concluyendo

Estos siete principios son los pilares de tu aprendizaje sobre las fórmulas en Excel y viene bien que los estudies y pongas en práctica cuanto antes. Mi intención es que tengas este listado siempre a la mano hasta que tengas dominado el tema.

Si te basas en estos principios para trabajar con las fórmulas, tendrás menos errores y, al tener presente cuáles son las posibles causas, podrás detectar y corregir cualquier falencia en menos tiempo.

¡Nos vemos!

[Tweet](https://twitter.com/share)

---
title: 'Crear un índice de tus hojas en un libro Excel'
snippet: ''
cluster: false
draft: false 
description: 'Simplifica la gestión de múltiples hojas en Excel creando un índice automático. Descubre cómo hacerlo con la ayuda de macros (VBA).'
publishDate: '2014-03-24'
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
slug: automatizacion-con-excel/crear-un-indice

---

\[resumen\]Crear un índice de las hojas que tiene tu libro de trabajo, te resultará muy útil para aquellos casos en los que tienes un montón de pestañas y te pierdes en la marea.

Pero, ¿qué hacer para automatizar un poco este proceso? En esta entrada te lo muestro.\[/resumen\]

La semana pasada recibí una consulta sobre un tema relacionado con un libro de trabajo que tenía un montón de hojas y, luego de responder a la consulta, me di cuenta de que no tenía nada publicado con respecto a crear un índice de hojas para un libro de trabajo como éstos.

Así que he decidido dejarte este artículo como referencia, para que puedas automatizar esta tarea cuando se te presente dicho problema.

## ¿Qué quieres decir con índice?

Cuando trabajamos con muchos datos o reportes semanales o distintos tipos de informes, fácilmente logramos armar unos archivos "monstruos" con chorrocientas hojas de trabajo que, a medida que va creciendo, nos dificulta más localizar la hoja que buscamos.

Un índice de hojas, o lo que es lo mismo, un listado con los nombres de todas tus hojas y que además, al hacer clic sobre éstos, automáticamente te lleven a la hoja indicada, sería de mucha ayuda.

¿O no lo crees así?

¡Claro que sí!

Podrías hacerlo manualmente, claro; pero ¿quién querría -o quién tendría tiempo para hacerlo- darse a la tarea de crear, uno por uno, los enlaces a 70 hojas de trabajo?

¿Tú sí?

¡Pues buena suerte!

Pero si cambias de opinión, aquí te dejo una cápsula de información que te ayudará a librarte de ese dolor de cabeza en unos pocos minutos. \[h2 icono=""\]Crear un índice de hojas en tres pasos.\[/h2\] \[pasos paso="1"\] Primero, debes insertar un módulo de Excel, tal como te mostré [en este artículo](http://raymundoycaza.com/como-insertar-un-modulo-en-excel/ "Insertar un módulo en Excel").\[/pasos\]

\[pasos paso="2"\]Luego, pegarás el siguiente código en el módulo que acabas de crear.\[/pasos\]

Option Explicit

Sub construirIndice()

'/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
'   PRIMER PASO: Verificamos que exista
'                la hoja 'Indice', de lo
'                contrario, la creamos.
'\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/
Dim hoja As Worksheet
On Error Resume Next
Set hoja \= Worksheets("INDICE")
On Error GoTo 0

If hoja Is Nothing Then
    ' Como la hoja no existe, le digo a Excel que la cree.
    Worksheets.Add(Before:\=Worksheets(1)).Name \= "INDICE"
Else
    ' Si la hoja ya existe, entonces borramos todo
    ' lo que haya en ella
    Worksheets("INDICE").Cells.Clear
End If

' Le ponemos un título a la hoja
Worksheets("Indice").Range("A1").value \= "INDICE"

'/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
'   SEGUNDO PASO: Vamos creando los enlaces
'                 de cada hoja, una por una.
'/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
Dim fila As Long
Dim enlaceInicio As String

fila \= 2
' ¿En qué celda quieres colocar el enlace de regreso al índice?
enlaceInicio \= "B1"

For Each hoja In Worksheets
    If hoja.Name <> "INDICE" Then
        ' Creamos el enlace de regreso.
        With Worksheets("INDICE")
            .Hyperlinks.Add Anchor:\=.Cells(fila, 1), \_
            Address:\="", \_
            SubAddress:\="'" & hoja.Name & "'!A1", \_
            TextToDisplay:\=hoja.Name
        End With

        With hoja
            .Hyperlinks.Add Anchor:\=.Range(enlaceInicio), \_
            Address:\="", \_
            SubAddress:\="INDICE!A1", \_
            TextToDisplay:\="INDICE"
        End With
        fila \= fila + 1
    End If
Next

End Sub

\[pasos paso="3"\]Ejecuta la macro desde el 'lanzador de macros'. Recuerda que esto [ya lo vimos anteriormente.](http://raymundoycaza.com/como-grabar-macros/ "Cómo grabar macros")\[/pasos\]

## Hemos terminado

Una vez ejecutada la macro, verás cómo se ha creado automáticamente tu índice de hojas en Excel, dejándote el resto de la tarde libre para tus otras ocupaciones :D

No olvides dejarme tus comentarios contándome cómo te fue con tu propio índice en Excel.

¡Nos vemos!

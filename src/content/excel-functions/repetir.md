---
name: "REPETIR"
nameAlternatives:
  - "REPT"
  - "REPETIR"
syntax: "REPETIR(texto, núm_de_veces)"
description: "Repite un texto un número determinado de veces en una celda."
group: "Texto"
volatile: false
availableSince: "Excel 2003"
availableIn:
  - "Excel 2003+"
  - "Excel 365"
  - "Excel Online"
  - "Google Sheets"
relatedFunctions:
  - "CONCATENAR"
  - "TEXTO"
  - "IZQUIERDA"
  - "DERECHA"
useCases:
  - "Crear separadores visuales dentro de celdas"
  - "Rellenar celdas con caracteres para simular barras de progreso"
  - "Generar máscaras de formato personalizado"
avoidCases:
  - "Cuando necesitas concatenar textos distintos (usa CONCATENAR)"
  - "Cuando el número de repeticiones puede ser 0 o negativo sin validación previa"
example:
  formula: '=REPETIR("★", 5)'
  result: "★★★★★"
  context: "Mostrar una calificación visual de 5 estrellas"
relatedPosts:
  - "2014-10-03-la-funcion-repetir"
  - "2013-12-11-la-funcion-concatenar-en-excel"
---

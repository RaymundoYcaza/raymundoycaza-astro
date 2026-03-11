export function formatDate(date: Date | string): string {
  const d =
    typeof date === "string"
      ? new Date(date + "T12:00:00") // forzar mediodía evita el día anterior
      : date;

  return new Intl.DateTimeFormat("es-EC", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

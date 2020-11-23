export function valida(condición, mensaje) {
  if (!condición) {
    throw new Error(mensaje);
  }
}

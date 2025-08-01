// Limpia texto eliminando tildes y caracteres especiales
export function cleanText(input, separator = '-') {
  const tildes = {
    á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u',
    Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U',
    ñ: 'n', Ñ: 'N'
  };

  return input
    .replace(/[áéíóúÁÉÍÓÚñÑ]/g, match => tildes[match])
    .replace(/[^\w\s]/gi, '')
    .trim()
    .replace(/\s+/g, separator);
}

export function getRandom(array, n) {
  return array.sort(() => Math.random() - Math.random()).slice(0, n);
}

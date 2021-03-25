export function sample(arr, size) {
  const shuffled = arr.slice(0);
  let i = arr.length;

  while (i--) {
    const j = Math.floor((i + 1) * Math.random());
    const aux = shuffled[j];
    shuffled[j] = shuffled[i];
    shuffled[i] = aux;
  }
  return shuffled.slice(0, size);
}

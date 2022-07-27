export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  for (const idx of array) {
    array[index] = appendString + idx; // eslint-disable-line no-param-reassign
    index += 1;
  }

  return array;
}

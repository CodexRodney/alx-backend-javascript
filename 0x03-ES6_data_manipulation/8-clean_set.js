export default function cleanSet(set, startString) {
  if (startString === '') return '';
  let arr = Array.from(set);
  arr = arr.filter((value) => value.includes(startString))
    .map((value) => value.replace(startString, '-'));
  arr[0] = arr[0].slice(1);
  let newString = '';
  for (const x of arr) {
    newString += x;
  }
  return newString;
}

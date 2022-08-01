export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const array = arr.map((item) => item.id);
    return array;
  }
  return [];
}

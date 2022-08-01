export default function getStudebtsByLocation(students, city) {
  const array = students.filter((value) => value.location === city);
  return array;
}

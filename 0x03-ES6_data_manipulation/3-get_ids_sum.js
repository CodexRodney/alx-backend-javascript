export default function getStudentIdsSum(students) {
  const arr = students.reduce((previousvalue, currentvalue) => previousvalue + currentvalue.id, 0);
  return arr;
}

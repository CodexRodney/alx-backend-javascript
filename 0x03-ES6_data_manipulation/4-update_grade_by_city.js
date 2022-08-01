export default function updateStudentGradeByCity(students, city, newGrades) {
  const arr = students.filter((value) => value.location === city)
    .map((value) => {
      const newStudent = value;
      newStudent.grade = 'N/A';
      for (const x of newGrades) {
        if (newStudent.id === x.studentId) {
          if ('grade' in x) {
            newStudent.grade = x.grade;
          } else {
            newStudent.grade = 'N/A';
          }
        }
      }
      return newStudent;
    });
  return arr;
}

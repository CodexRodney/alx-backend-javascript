/*
 * Reads From a file synchrounsly
 */

/* eslint-disable guard-for-in, no-continue */

const fs = require('fs');

function countStudents(path) {
  try {
    let content = fs.readFileSync(path);
    content = content.toString().split('\n');
    content.pop();
    const arr = [];
    const headers = content[0].toString().split(',');
    for (let i = 1; i < content.length; i + 1) {
      const obj = {};
      const currentline = content[i].split(',');
      for (let j = 0; j < headers.length; j + 1) {
        obj[headers[j]] = currentline[j];
      }
      arr.push(obj);
    }
    console.log(`Number of students: ${arr.length}`);
    const fields = {};
    const fieldStudent = {};
    for (let x = 0; x < arr.length; x + 1) {
      if (arr[x].field in fields) continue;
      const arrStudent = [];
      const number = 0;
      const currentField = arr[x].field;
      for (let j = 0; j < arr.length; j + 1) {
        if (currentField === arr[j].field) {
          fields[currentField] = number + 1;
          arrStudent.push(arr[j].firstname);
        }
      }
      fieldStudent[currentField] = arrStudent;
    }
    for (const x in fields) {
      console.log(`Number of students in ${x}: ${fields[x]}. List: ${fieldStudent[x]}`);
    }
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

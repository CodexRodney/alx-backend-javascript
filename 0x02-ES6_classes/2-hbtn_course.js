export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }

  // get method for _name
  get name() {
    return this._name;
  }

  // set method for _name
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // get method for length
  get length() {
    return this._length;
  }

  // set method for _length
  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // get method for students
  get students() {
    return this._students;
  }

  // set method for students
  set students(students) {
    if (Array.isArray(students)) {
      for (const value of students) {
        if (typeof value !== 'string') {
          throw new TypeError('Students must be an Array of strings');
        }
      }
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array of strings');
    }
  }
}

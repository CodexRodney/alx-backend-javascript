export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // get method for code
  get code() {
    return this._code;
  }

  // set method for code
  set code(code) {
    this._code = code;
  }

  // get method for name
  get name() {
    return this._name;
  }

  // set method for name
  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

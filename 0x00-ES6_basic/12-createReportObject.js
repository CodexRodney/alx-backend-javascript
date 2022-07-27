/* eslint-disable guard-for-in, no-param-reassign */
export default function createReportObject(employeesList) {
  const allEmployees = {};
  for (const key in employeesList) {
    allEmployees[key] = employeesList[key];
  }
  const obj = {
    allEmployees,
    getNumberOfDepartments(employeelist) {
      employeelist = new Map(Object.entries(employeelist));
      return employeelist.size;
    },
  };
  return obj;
}

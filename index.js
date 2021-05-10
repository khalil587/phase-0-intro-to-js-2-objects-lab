const employee = {
        name:"Sam",
        streetAddress:  "11 Broadway",
     }
function updateEmployeeWithKeyAndValue(Objemployee, key, value) {
    const newObj = {...Objemployee};

    newObj[key] = value;
    return newObj;
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newPerson = {...employee};
    delete newPerson[key]; 

    return newPerson;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
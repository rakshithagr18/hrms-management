let employees = [
    { name: "kiran", doj: "01/01/2025" },
    { name: "vishnu", doj: "20/01/2020" },            
    { name: "prajwal", doj: "31/01/2002" },
    { name: "Rakshitha", doj: "04/10/2008" },
    { name: "Sujatha", doj: "10/10/2000" }
];

let nameToggle = true;
let dateToggle = true;

function loadTable() {
    let tableBody = document.querySelector("#employeeTable tbody"); 
    tableBody.innerHTML = "";
    
    employees.forEach(employee => {
        let row = tableBody.insertRow();
        row.insertCell(0).textContent = employee.name;
        row.insertCell(1).textContent = employee.doj;
    });
}

// Main button click
function sortName() {
    if (nameToggle) {
        employees.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        employees.sort((a, b) => b.name.localeCompare(a.name));
    }
    nameToggle = !nameToggle;   
    loadTable();
}

function sortDate() {
    employees.sort((a, b) => {
        let d1 = new Date(a.doj.split("/").reverse().join("-"));
        let d2 = new Date(b.doj.split("/").reverse().join("-"));
        return dateToggle ? d1 - d2 : d2 - d1;
    });
    dateToggle = !dateToggle;
    loadTable();
}

loadTable();

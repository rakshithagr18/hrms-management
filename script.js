let employees = [

{
name:"Kiran",
date:"01/01/2025",
email:"kiran@gmail.com",
phone:"9876543211",
nationality:"Indian",
gender:"Male",
age:25,
status:"Active",
hire:"Full-time"
},

{
name:"Vishnu",
date:"20/07/2020",
email:"vishnu@gmail.com",
phone:"9876543212",
nationality:"Indian",
gender:"Male",
age:28,
status:"Active",
hire:"Full-time"
},

{
name:"Prajwal",
date:"31/01/2002",
email:"prajwal@gmail.com",
phone:"9876543212",
nationality:"Indian",
gender:"Male",
age:26,
status:"Active",
hire:"Full-time"
},

{
name:"Sujatha",
date:"10/10/2000",
email:"sujatha@gmail.com",
phone:"9876543213",
nationality:"Indian",
gender:"Female",
age:29,
status:"Active",
hire:"Full-time"
},

{
name:"Rakshitha",
date:"04/10/2008",
email:"rakshitha@gmail.com",
phone:"9876543210",
nationality:"Indian",
gender:"Female",
age:23,
status:"Active",
hire:"Full-time"
}

];

let nameAsc = true;
let dateAsc = true;

function loadEmployees(){

let table = document.getElementById("employeeBody");
table.innerHTML = "";

employees.forEach(emp => {

let row = document.createElement("tr");

row.innerHTML = `
<td>${emp.name}</td>
<td>${emp.date}</td>
`;

row.onclick = function(){

localStorage.setItem("employeeData", JSON.stringify(emp));
window.location.href = "profile.html";

};

table.appendChild(row);

});

}


// Sort by Name
function sortName(){

if(nameAsc){

employees.sort((a,b)=>a.name.localeCompare(b.name));

}else{

employees.sort((a,b)=>b.name.localeCompare(a.name));

}

nameAsc = !nameAsc;

loadEmployees();

}


// Sort by Date
function sortDate(){

if(dateAsc){

employees.sort((a,b)=>new Date(a.date) - new Date(b.date));

}else{

employees.sort((a,b)=>new Date(b.date) - new Date(a.date));

}

dateAsc = !dateAsc;

loadEmployees();

}


// Load employees first time
loadEmployees();
// Add Skill
function addSkill() {

let skill = document.getElementById("skillSelect").value;
let list = document.getElementById("skillList");

// create list item
let li = document.createElement("li");
li.textContent = skill;

// delete button
let btn = document.createElement("button");
btn.textContent = "Delete";
btn.onclick = function(){
li.remove();
};

li.appendChild(btn);

list.appendChild(li);

}


// Add Address
function addAddress() {

let address = document.getElementById("addressSelect").value;
let list = document.getElementById("addressList");

let li = document.createElement("li");
li.textContent = address;

let btn = document.createElement("button");
btn.textContent = "Delete";
btn.onclick = function(){
li.remove();
};

li.appendChild(btn);

list.appendChild(li);

}


// Load Employee Data
let emp = JSON.parse(localStorage.getItem("employeeData"));

if(emp){

document.getElementById("empName").innerText = emp.name || "";
document.getElementById("email").innerText = emp.email || "";
document.getElementById("phone").innerText = emp.phone || "";
document.getElementById("nationality").innerText = emp.nationality || "";
document.getElementById("gender").innerText = emp.gender || "";
document.getElementById("age").innerText = emp.age || "";
document.getElementById("status").innerText = emp.status || "";
document.getElementById("hire").innerText = emp.hire || "";

}
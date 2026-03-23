const employees = [
  {
    name:'Rakshitha',
    role:'Analyst',
    email:'rakshitha@gmail.com',
    phone:'9876543210',
    country:'India',
    gender:'Female',
    age:25,
    education:'B.Tech',
    degree:'Engineering',
    skill:'SQL',
    softSkill:'Communication',
    address:'Bangalore',
    city:'Bangalore',
    postal:'560001',
    tax:'123456',
    date:'2024-04-24',
    img:'https://i.pravatar.cc/100?img=5'
  },
  {
    name:'Rahul',
    role:'Developer',
    email:'rahul@gmail.com',
    phone:'9876543211',
    country:'India',
    gender:'Male',
    age:28,
    education:'B.Tech',
    degree:'Engineering',
    skill:'JS',
    softSkill:'Teamwork',
    address:'Hyderabad',
    city:'Hyderabad',
    postal:'500001',
    tax:'654321',
    date:'2023-06-10',
    img:'https://i.pravatar.cc/100?img=3'
  }
];

/* SAFE SETTERS */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerText = value;
}

function setImage(id, src) {
  const el = document.getElementById(id);
  if (el) el.src = src;
}

/* SELECT EMPLOYEE */
function selectEmployee(i){
  const e = employees[i];

  // Left Profile
  setText("empName", e.name);
  setText("empRole", e.role);
  setText("empEmail", e.email);
  setText("empPhone", e.phone);
  setText("empCountry", e.country);
  setText("empGender", e.gender);
  setText("empAge", e.age);

  // Professional Info
  setText("empEducation", e.education);
  setText("empDegree", e.degree);
  setText("empSkill", e.skill);
  setText("empSoftSkill", e.softSkill);

  // Address
  setText("empAddress", e.address);
  setText("empCity", e.city);
  setText("empPostal", e.postal);

  // Tax
  setText("empTax", e.tax);

  // Image
  setImage("empImg", e.img);
}

/* RENDER EMPLOYEE LIST */
function renderList(){
  const list = document.querySelector(".employee-list");
  if (!list) return;

  list.innerHTML = "";

  employees.forEach((emp, index) => {
    const div = document.createElement("div");
    div.innerText = emp.name;
    div.onclick = () => selectEmployee(index);
    list.appendChild(div);
  });
}

/* SORT BY NAME */
function sortByName(){
  employees.sort((a, b) => a.name.localeCompare(b.name));
  renderList();
}

// /* SORT BY DATE */
// function sortByDate(){
//   employees.sort((a, b) => new Date(a.date) - new Date(b.date));
//   renderList();
// }

/* DEFAULT LOAD */
window.onload = function(){
  renderList();
  selectEmployee(0); // show first employee
};
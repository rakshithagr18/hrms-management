// Load table
window.onload = function () {
  renderTable();
};

// Sort states
let nameSortAsc = true;
let dateSortAsc = true;

// Render table
function renderTable() {
  const tbody = document.getElementById("employeeBody");
  tbody.innerHTML = "";

  employees.forEach(emp => {
    tbody.innerHTML += `
      <tr onclick="openProfile(${emp.id})">
        <td>${emp.name}</td>
        <td>${emp.date}</td>
      </tr>
    `;
  });
}

// Sort Name
function sortName() {
  employees.sort((a, b) => nameSortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
  nameSortAsc = !nameSortAsc;
  renderTable();
}

// Sort Date
function sortDate() {
  employees.sort((a, b) => {
    let d1 = new Date(a.date.split("/").reverse().join("-"));
    let d2 = new Date(b.date.split("/").reverse().join("-"));
    return dateSortAsc ? d1 - d2 : d2 - d1;
  });
  dateSortAsc = !dateSortAsc;
  renderTable();
}

// Redirect to profile
function openProfile(id) {
  window.location.href = "profile.html?id=" + id;
}
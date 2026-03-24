window.onload = function () {

  // Get selected employee ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  // Safety check
  if (!id) {
    console.error("No employee ID in URL");
    return;
  }

  // Find selected employee
  const emp = employees.find(e => e.id == id);

  if (!emp) {
    console.error("Employee not found");
    return;
  }

  // Set data into HTML
  document.getElementById("photo").src = emp.photo;
  document.getElementById("name").innerText = emp.name;
  document.getElementById("email").innerText = emp.email;
  document.getElementById("phone").innerText = emp.phone;
  document.getElementById("nationality").innerText = emp.nationality;
  document.getElementById("gender").innerText = emp.gender;
  document.getElementById("age").innerText = emp.age;
  document.getElementById("status").innerText = emp.status;
  document.getElementById("hire").innerText = emp.hire;
};
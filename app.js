let show = document.getElementById("show");

let student = [
  {
    name: "Ali",
    email: "ali@gmail.com",
    password: "ali",
    roll: 745,
    age: 25,
    course: "web devlopment",
  },
  {
    name: "Mehak",
    email: "mehak@gmail.com",
    password: "12345",
    roll: 746,
    age: 23,
    course: "Software Engineering",
  },
  {
    name: "Muskan",
    email: "muskan@gmail.com",
    password: "charli",
    roll: 747,
    age: 22,
    course: "Artificial Intelligence",
  },
  {
    name: "Feroz",
    email: "feroz@gmail.com",
    password: "khan",
    roll: 748,
    age: 28,
    course: "Graphic Designer",
  },
];

function render() {
  show.innerHTML = "";
  for (let i = 0; i < student.length; i++) {
    show.innerHTML += `<tr><td>${student[i].name}</td>
                                      <td>${student[i].email}</td>
                                      <td>${student[i].password}</td>
                                      <td>${student[i].roll}</td>
                                      <td>${student[i].age}</td>
                                      <td>${student[i].course}</td>

                                      <td><button onclick="edit(${[
                                        i,
                                      ]})">Edit</button><button onclick="del(${[
      i,
    ]})">Delete</button></td>

                                      </tr>`;
  }
}
render();

let editIndex = null;
function edit(index) {
  console.log(student[index]);

  let form = document.getElementById("form");
  form.style.display = "block";
  document.getElementById("table").style.display = "none";

  // Index store
  editIndex = index;

  let stdData = student[index];

  document.getElementById("name").value = stdData.name;
  document.getElementById("email").value = stdData.email;
  document.getElementById("password").value = stdData.password;
  document.getElementById("roll").value = stdData.roll;
  document.getElementById("age").value = stdData.age;
  document.getElementById("course").value = stdData.course;
}

function save() {
  document.getElementById("table").style.display = "block";

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let roll = document.getElementById("roll").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;

  if (!name || !email || !roll) {
    alert("Please fill all fields !");
  }
  student[editIndex] = {
    name,
    email,
    password,
    roll,
    age,
    course,
  };

  editIndex = null;
  show.innerHTML = "";

  render();

  document.getElementById("form").style.display = "none";
}

function del(index) {
  student.splice(index, 1);
  alert(`This Data has been Deleted`);
  render();
}

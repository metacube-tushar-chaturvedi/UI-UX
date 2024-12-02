let empolyeeDetails = {
  employeeId: 0,
  employeeName: "",
  employeeGender: "",
  employeeEmail: "",
  employeePassword: "",
  employeeContact: "",
};

let vehicleDetails = {
  vehcileName: "",
  vehcileType: "",
  vehcileNumber: "",
  employeeId: 0,
  identication: "",
};

let getPrice = {
  cycle: {
    daily: 5,
    month: 100,
    year: 500,
  },
  bike: {
    daily: 20,
    month: 200,
    year: 1000,
  },
  car: {
    daily: 20,
    month: 500,
    year: 3500,
  },
};

let title = document.getElementById("form-header-title");
title.innerHTML = "Add Employee";

let form = document.getElementById("form-id");

let label = document.createElement("p");
label.innerText = "Name";

let nameField = document.createElement("input");
nameField.setAttribute("type", "text");
nameField.setAttribute("id", "fullname");

form.appendChild(label);
form.appendChild(nameField);

nameField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    empolyeeDetails.employeeName = document.getElementById("fullname").value;
    radioinput(empolyeeDetails.employeeName);
  }
});

function radioinput(name) {
  console.log("called radioinput");
  var form = document.getElementById("form-id");

  let labeltext = document.createElement("p");
  labeltext.innerText = "Hi " + name + "! Can i know your gender";

  let radioContainer = document.createElement("div");
  const radioOptions = [" male", " female", " other"];

  radioOptions.forEach((option) => {
    const label = document.createElement("label");
    label.textContent = option;

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "gender";
    radioInput.value = option;

    label.prepend(radioInput);
    radioContainer.appendChild(label);
    radioContainer.appendChild(document.createElement("br")); // Line break for better layout
  });

  form.appendChild(labeltext);
  form.appendChild(radioContainer);

  radioContainer.addEventListener("change", function (e) {
    emailInput(name);
  });
}

function emailInput(name) {
  console.log("called emailinput");
  let form = document.getElementById("form-id");

  let label = document.createElement("p");
  label.innerText = "Hi " + name + "! Can i know your email";

  let emailbtn = document.createElement("input");
  emailbtn.setAttribute("type", "email");
  emailbtn.setAttribute("id", "email");

  form.appendChild(label);
  form.appendChild(emailbtn);

  emailbtn.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      empolyeeDetails.employeeEmail = emailbtn.value;
      passwordInput(name);
    }
  });
}

function passwordInput(name) {
  console.log("called radioinput");
  var form = document.getElementById("form-id");

  let label = document.createElement("p");
  label.innerText = "Hi " + name + "! Can i know your password";

  let passwordfield = document.createElement("input");
  passwordfield.setAttribute("type", "password");
  passwordfield.setAttribute("id", "password");

  form.appendChild(label);
  form.appendChild(passwordfield);

  passwordfield.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      empolyeeDetails.employeePassword = passwordfield.value;
      contactInput(name);
    }
  });
}

function contactInput(name) {
  console.log("called contact");
  var form = document.getElementById("form-id");

  let label = document.createElement("p");
  label.innerText = "Hi " + name + "! Can i know your contact number";

  let contactfield = document.createElement("input");
  contactfield.setAttribute("type", "tel");
  contactfield.setAttribute("id", "contact-number");

  form.appendChild(label);
  form.appendChild(contactfield);

  contactfield.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      empolyeeDetails.employeeContact = contactfield.value;
      registration();
    }
  });
}

function registration() {
  let form = document.getElementById("form-id");
  let btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("onClick", "add_employee()");
  btn.innerHTML = "add Employee";
  form.appendChild(btn);
}

function add_employee() {
  console.log("call ho gya");
  document.getElementById("form-header-title").innerHTML = "Vehcile Details";

  const list = document.getElementById("form-id");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  empolyeeDetails.employeeId = Math.floor(Math.random() * 100) + 1;

  document.getElementById("created-id").innerHTML =
    "Employee Id : " + empolyeeDetails.employeeId;

  vehcileName();
}

function vehcileName() {
  let form = document.getElementById("form-id");

  let label = document.createElement("p");
  label.innerText = "Vehcile Name";

  let nameField = document.createElement("input");
  nameField.setAttribute("type", "text");
  nameField.setAttribute("id", "vechile-name");

  form.appendChild(label);
  form.appendChild(nameField);

  nameField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      vehicleDetails.vehcileName =
        document.getElementById("vechile-name").value;
      vehcileType();
    }
  });
}

function vehcileType() {
  let form = document.getElementById("form-id");
  let label = document.createElement("p");
  label.innerText = "vehcile Type";

  const selectElement = document.createElement("select");
  selectElement.setAttribute("id","vechiletype")

  const options = ["cycle", "bike", "car"];

  options.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    selectElement.appendChild(option);
  });

  form.appendChild(label);
  form.appendChild(selectElement);

  selectElement.addEventListener("change", function (e) {
    vehicleDetails.vehcileType = document.getElementById("vechiletype").value;
    vehcileNumber();
  });
}

function vehcileNumber() {
  let form = document.getElementById("form-id");

  let label = document.createElement("p");
  label.innerText = "Vehcile Number";

  let nameField = document.createElement("input");
  nameField.setAttribute("type", "text");
  nameField.setAttribute("id", "vechile-number");

  form.appendChild(label);
  form.appendChild(nameField);

  nameField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      vehicleDetails.identication =
        document.getElementById("vechile-number").value;
      employeeId();
    }
  });
}

function employeeId() {
  let form = document.getElementById("form-id");

  let label = document.createElement("p");
  label.innerText = "Employee Id";

  let employeeId = document.createElement("div");
  employeeId.setAttribute("id", "employee-id");
  employeeId.innerHTML = empolyeeDetails.employeeId;

  form.appendChild(label);
  form.appendChild(employeeId);
  vehicleDetails.employeeId = empolyeeDetails.employeeId;
  identication();
}

function identication() {
  let form = document.getElementById("form-id");

  let label = document.createElement("p");
  label.innerText = "Vehcile identication";

  let nameField = document.createElement("input");
  nameField.setAttribute("type", "text");
  nameField.setAttribute("id", "vehcile-identication");

  form.appendChild(label);
  form.appendChild(nameField);

  nameField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      //   vehicleDetails.identication=document.getElementById('vehcile-identication').value;
      getPass();
    }
  });
}

function getPass() {
  let parentElement = document.getElementById("passElement");

  let name = document.createElement("p");
  name.setAttribute("id", "pass-employee-name");
  name.innerHTML = "Employee Name :" + empolyeeDetails.employeeName;

  let employeeId = document.createElement("p");
  employeeId.setAttribute("id", "pass-employee-id");
  employeeId.innerHTML = "Employee Id :" + empolyeeDetails.employeeId;

  let daily = document.createElement("p");
  daily.setAttribute("id", "daily-price");
  let month = document.createElement("p");
  month.setAttribute("id", "month-price");
  let year = document.createElement("p");
  year.setAttribute("id", "year-price");

  if (vehcileType == "bike") {
    daily.innerHTML = "Daily Price :" + getPass.bike.daily;
    month.innerHTML = "Monthly price :" + getPass.bike.month;
    year.innerHTML = "Yearly Price :" + getPass.bike.year;
  } else if (vehcileType == "cycle") {
    daily.innerHTML = "Daily Price :" + getPass.cycle.daily;
    month.innerHTML = "Monthly price :" + getPass.cycle.month;
    year.innerHTML = "Yearly Price :" + getPass.cycle.year;
  } else if (vehcileType == "car") {
    daily.innerHTML = "Daily Price :" + getPass.car.daily;
    month.innerHTML = "Monthly price :" + getPass.car.month;
    year.innerHTML = "Yearly Price :" + getPass.car.year;
  }

  parentElement.appendChild(name);
  parentElement.appendChild(employeeId);
  parentElement.appendChild(daily);
  parentElement.appendChild(month);
  parentElement.appendChild(year);
}


 let isError = false;

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
  identication: "",
  totalAmountInUsd : 0
};

const getPrice ={
 INR : {
  cycle: {
    daily: 5,month: 100, year: 500,
  },
  bike: {daily: 20, month: 200, year: 1000,
  },
  car: { daily: 20,  month: 500, year: 3500,
  },
},

YEN : { cycle: { daily: 30, month: 234, year: 500,
  },
bike: { daily: 50,month: 400, year: 1000,
  },
  car: {  daily: 100,  month: 600,  year: 1500,
  },
},

USD: { cycle: { daily: 0.059, month: 1.18, year: 5.90,
},
bike: { daily: 0.24,month: 2.36, year: 11.80,
},
car: {  daily: 0.24,  month: 5.90,  year: 41.30,
},
}
};

var vehicleCard = document.getElementById("price-card-con");
vehicleCard.style.display="none";

let user  = document.getElementById("user");
user.style.display="none";

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
    let result= validateName(document.getElementById("fullname").value);
    if(result){
      if(isError){
        const element = document.getElementById("error-element");
element.remove();
isError=false;

      }
      empolyeeDetails.employeeName = document.getElementById("fullname").value;
    radioinput(empolyeeDetails.employeeName);

    }
    else{
      let msg = "Length should be min 2 character and no numeric";
      createerrorElement(msg);
      isError = true;

    }
   
  }
});

function validateName(name) {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(name);
}
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
    let result = validateEmail(emailbtn.value);
    if(result){
      if(isError){
        deleteErrorElement();
      }
      empolyeeDetails.employeeEmail = emailbtn.value;
      passwordInput(name);
    }
    else {
      let msg = "Mail is not in proper formate";
      createerrorElement(msg);
      isError = true;
    }
    
    }
  });
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
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
      let result = validatePassword(passwordfield.value);
      if(result){
        if(isError){
          deleteErrorElement();
        }
        empolyeeDetails.employeePassword = passwordfield.value;
        contactInput(name);
      }
      else {
        let msg = "password not in proper formate(uppercase, lowercase, number, min length 8 )";
        createerrorElement(msg);
        isError = true;
      } 

    }
  });
}

function validatePassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
  return regex.test(password);
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
    let result=   validateContactNumber(contactfield.value);
    if(result){
      if(isError)

      {
        deleteErrorElement();
      }
      empolyeeDetails.employeeContact = contactfield.value;
      registration();
    }else{
      let msg = "contact number not in proper formate";
      createerrorElement(msg);
      isError = true;
    }
     
    }
  });
}

function validateContactNumber(contactNumber) {
  if (contactNumber.length > 7 && /^\d+$/.test(contactNumber)) {
      return true;
  }
  return false;
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
    vehicleDetails.vehcileType = selectElement.value;
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
      vehicleDetails.identication = nameField.value;
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
      // getPass();
      var vehicleCard = document.getElementById("price-card-con");
      displayPricing()
    }
  });
}


function setPrice(pricing, vehicleType) {
  const pricingSection = document.getElementById("card-title").innerHTML=vehicleType.toUpperCase();

  document.querySelector("#daily-price").innerHTML = pricing.daily + " Daily";
  document.querySelector("#monthly-price").innerHTML = pricing.month + " Monthly";
  document.querySelector("#yearly-price").innerHTML = pricing.year + " Yearly";
}

function displayPricing() {
  // 
  
  const currencySelect = document.querySelector("#currency_type");
  
  let currencyType = currencySelect.value;
  let vehicleType = vehicleDetails.vehcileType || "cycle";
  

  
  let pricing = getPrice[currencyType][vehicleType];

  console.log(pricing);
  
  
  setPrice(pricing, vehicleType);
  
  vehicleCard.style.display="block";
  
  currencySelect.addEventListener("change", (event) => {
      currencyType = currencySelect.value;

      pricing = getPrice[currencyType][vehicleType];
      
      setPrice(pricing, vehicleType);
  });




}





function createerrorElement( msg){
  let errorElement =  document.createElement("p");
  errorElement.setAttribute("id","error-element");
  errorElement.innerHTML = msg;
  let form = document.getElementById("form-id");

 form.appendChild(errorElement);
}

function deleteErrorElement(){
  const element = document.getElementById("error-element");
  element.remove();
  isError=false;
}


function displayDetails(){
  const passSelect = document.getElementById("ticket-plan");
  let pricing = getPrice["USD"][vehicleDetails.vehcileType]

      switch (passSelect.value) {
          case "daily":
              vehicleDetails.totalAmountInUsd = pricing.daily;        
              break;
          case "monthly":
            vehicleDetails.totalAmountInUsd = pricing.month;        
              break;
          case "yearly":
            vehicleDetails.totalAmountInUsd = pricing.year;        
              break;
      }



  let employee = document.getElementById("form-header-title");
  employee.innerHTML="Employee Details";

  let form = document.getElementById("form-id");
  form.style.display="none";
  let priceCard = document.getElementById("price-card-con");
  priceCard.style.display="none";

  let user  = document.getElementById("user");
  user.style.display="block";


  document.getElementById("employee-name").innerHTML ="Employee Name : "+ empolyeeDetails.employeeName;
  document.getElementById("employee-id").innerHTML ="Employee Id : "+ empolyeeDetails.employeeId;
  document.getElementById("employee-gender").innerHTML ="Employee Gender : " +empolyeeDetails.employeeGender;
  document.getElementById("employee-email").innerHTML = "Employee Email : " +empolyeeDetails.employeeEmail;
  document.getElementById("employee-contact").innerHTML = "Employee contact : " + empolyeeDetails.employeeContact;
  document.getElementById("employee-contact").innerHTML = "Employee contact : " + empolyeeDetails.employeeContact;
  document.getElementById("vehcile-name").innerHTML = "vehcile Name : " + vehicleDetails.vehcileName;
  document.getElementById("vehcile-type").innerHTML = "vehcile type : " + vehicleDetails.vehcileType;
  // document.getElementById("vehcile-number").innerHTML = "vehcile number : " + vehicleDetails.vehcileNumber;
  document.getElementById("vehcile-identification").innerHTML = "vehcile identification : " + vehicleDetails.identication;
  document.getElementById("total-amt").innerHTML = "Total Amount : " +vehicleDetails.totalAmountInUsd + " USD"; 

}







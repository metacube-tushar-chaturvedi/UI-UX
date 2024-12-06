
import EmployeeDetails from "./employee.js";
import VehicleDetail from "./vehicle.js";

let employee = new EmployeeDetails();
const vehicle = new VehicleDetail();

let empform : HTMLElement | null =  document.getElementById("emp-form-id");

let empformLength: number = empform!.children.length ;

const empformElementIds:string[] =["name-text","employee-name","gender-text","gender","email-text","employee-email","password-text","password","contact-text","contact-text"]
let employeeElement: HTMLElement[] = Array.from(empform!.children) as HTMLElement[]; 

let indexLength :number = 1;

function validateName(name:string) {
    const regex = /^[a-zA-Z]{2,}$/;
    return regex.test(name);
  }


function nextBtn():void{
    console.log("sxadasd");
     if(indexLength == 1){
        let result = true;
         console.log(employeeElement[indexLength]);
        const text = document.getElementById(empformElementIds[indexLength]);
        console.log('employee-name');

        // result = validateName(text!);
      if(result){
        const element = document.getElementById("error-element");
        element!.style.display="none";


        employeeElement[indexLength-1].style.display="none";
        employeeElement[indexLength].style.display="none";

        let empName = employeeElement[indexLength].textContent!; 
        setTextElement(employeeElement[indexLength+1],"Hi " + empName + "! Can i know your gender");
        setContentElement(employeeElement[indexLength+2])
        employee.nameSet(employeeElement[indexLength].textContent!);
    
        indexLength+=2;

      }
      else {
console.log("else me aa rha hai");
      }


     }
     else if(indexLength == 3){
         
     }
}

function setTextElement(textEle :HTMLElement, msg:string){
     textEle.style.display="block";
     textEle.innerHTML=msg;
}

function setContentElement(contectEle:HTMLElement){
  contectEle.style.display="none";
}

  document.getElementById("nextBtn1")?.addEventListener("click", ()=>{
    nextBtn();
  })



class EmployeeDetails {
    private empName: string;
    private id: number;
    private gender: string;
    private email: string;
    private password: string;
    private contact:string

    public constructor(){
         this.empName = "John";
         this.id = 0;
         this.gender = "other";
         this.email = "abc@gmail.com";
         this.password = "password";
         this.contact = "+9134768458";
    }

    // setters
    
    public nameSet(newname :string){
        this.empName = newname;
    }
    
    public idSet(newId :number){
       this.id = newId;
    }
    
    public  genderSet(newGender :string){
       this.gender = newGender;
    }

    public emailSet(newEmail :string){
       this.email = newEmail;
    }


    public  passwordSet(newPassword :string){
       this.password = newPassword;
    }

    public  contactSet(newContact :string){
       this.contact = newContact;
    }

    public  getName(){
        return this.empName;
    }
    
    public  getId(){
       return this.id
    }

    public  getGender(){
     return this.gender 
    }

    public  getEmail(){
      return this.email;
    }

    public  getPassword(){
       return this.password;
    }

    public getContact(){
       return this.contact;
    }
}

export default EmployeeDetails;
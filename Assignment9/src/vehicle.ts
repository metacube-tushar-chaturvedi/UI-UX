
class VehicleDetail {
    private vName: string;
    private type: string;
    private number: string;
    private identication: string;
    private totalAmountInUsd: number = 0;


    public constructor(){
         this.vName = "vehcile";
         this.type = "type";
         this.number ="RJ14-Jaipur";
         this.identication = "None";
    }

    // setters
    
    public set nameSet(newName :string){
        this.vName = newName;
    }
    
    public set typeSet(newType :string){
       this.type =newType ;
    }
    
    public set numberSet(newNumber :string){
       this.number = newNumber;
    }

    public set identicationSet(newIdentication :string){
       this.identication = newIdentication;
    }
    public set totalAmountSet(amount :number){
       this.totalAmountInUsd = amount;
    }


    public get getName(){
        return this.vName;
    }
    
    public get getType(){
       return this.type
    }

    public get getNumber(){
     return this.number
    }

    public get getIdentication(){
      return this.identication;
    }
    
    public get getTotalAmount(){
        return this.totalAmountInUsd;
    }
}

export default VehicleDetail;
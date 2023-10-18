class Account{
    Acc_Bal=500
    Cid;
    Cname;
    constructor(id,name){
        this.Cid=id
        this.Cname=name
    }
    open_Acc(){
        console.log(this.Cname,"Account Opened successfully");

    }
    Dept_Bal(amount){
        this.Acc_Bal=this.Acc_Bal+amount
        console.log("Successfully deposited  Rupees:",amount);

    }
    Withdrawl_bal(amount){
        if (amount<=this.Acc_Bal){
            this.Acc_Bal-=amount
            console.log(amount," Rupees Withdrawl Successively");
        }
        else{
            console.log("Not sufficient amount");
        }
        
    }
    Get_Bal(){
        console.log("Account balance is:",this.Acc_Bal);

    }
}

let Sanjay = new Account(101,"Sanjay")
let Surya = new Account(101,"Surya")
Sanjay.open_Acc()
Sanjay.Dept_Bal(1000)
Sanjay.Withdrawl_bal(100)
Sanjay.Get_Bal()
console.log();
Surya.open_Acc()
Surya.Dept_Bal(10000)
Surya.Withdrawl_bal(3000)
Surya.Get_Bal()


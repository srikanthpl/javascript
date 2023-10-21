class Account{
    acc_Name;
    acc_no;
    bal=5000
    constructor(Name,No){
        this.acc_Name=Name
        this.acc_no=No
        console.log("hello");
    }
    openAcc(){
        console.log("Account opened successfully");
    }
}

class SA extends Account{
    constructor(acc_Name,acc_no,amount){
        super(acc_Name,acc_no)
        super.openAcc()
        super.bal
        this.amount=amount
    }
    }

let a1=new SA("Sanjay",87699,5000)
console.log(a1);



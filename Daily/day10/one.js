//class and objects
//class is a template is used to construct objects
//oops are used to solve real time problems through the objects

class Employee{
    min_Bal=500

    Open_Acc = (name)=>{
        console.log("Account Opened Succesfully",name);
    }
    Deposit_Amt(){
        console.log("Amount Deposited Successfully");
    }
    Withdrawl_Amt(){
        console.log("Amount Withdrawled Successively");
    }
    Check_bal(){
        console.log("Total Balance");
    }

}

let a1 = new Employee
console.log(a1.min_Bal)
a1.Deposit_Amt(500)
a1.Open_Acc("Sri")
a1.Check_bal()
a1.Withdrawl_Amt()


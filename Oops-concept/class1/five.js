class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0
    min_Bal=500
    open_Account(){
        console.log("Accounted Successfully")
    }
    deposit_Amount(amount){
        this.acc_Bal= this.acc_Bal + amount
        console.log(amount,":::Amount deposited")
    }
    withdrawl(){
        console.log("withdrawl")
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

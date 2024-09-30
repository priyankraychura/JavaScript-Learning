class Account{
    constructor(accNumber, accHolder, bal) {
        this.accNumber = accNumber;
        this.accHolder = accHolder;
        this.bal = bal;
    }

    checkBalance(){
        return this.bal;
    }

    deposit(amount){
        this.bal += amount;
    }

    withdraw(amount){
        this.bal -= amount;
    }
}

class ATM extends Account{
    displayOptions(){
        dispOptions = `
            1. Check Balance
            2. Deposite
            3. Withdraw
        `;
        console.log(dispOptions);
    }

    performOperation(operation, amount){
        switch(operation){
            case 1:
                console.log(this.checkBalance());
                break;
            case 2:
                this.deposit(amount);
                console.log("Your updated balance is: ", this.checkBalance());
                break;
            case 3:
                this.withdraw(amount);
                console.log("Your updated balance is: ", this.checkBalance());
                break;
            default:
                console.log("Please enter a valid choice");
        }
    }
}

const acc = new Account(12345678910, "Priyank", 1000);
console.log(acc.checkBalance())

const transn = new ATM();
transn.displayOptions();
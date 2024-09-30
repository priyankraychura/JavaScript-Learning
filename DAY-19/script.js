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
    constructor(accNumber, accHolder, bal){
        super(accNumber, accHolder, bal);
    }
    displayOptions(){
        const dispOptions = "1. Check Balance \n2. Deposite \n3. Withdraw";
        console.log(dispOptions);
    }

    performOperation(operation, amount = 0){
        switch(operation){
            case 1:
                console.log("Your current balance is: ", this.checkBalance());
                break;
            case 2:
                this.deposit(amount);
                console.log("Balance after deposite is: ", this.checkBalance());
                break;
            case 3:
                this.withdraw(amount);
                console.log("Balance after withdrawal is: ", this.checkBalance());
                break;
            default:
                console.log("Please enter a valid choice");
        }
    }
}

// const acc = new Account(12345678910, "Priyank", 1000);

const transn = new ATM(12345678910, "Priyank", 1000);
transn.displayOptions();
transn.performOperation(1);
transn.performOperation(2, 500);
transn.performOperation(3, 100);
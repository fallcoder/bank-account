class BankAccount {
    // constructor initializes the owner and the balance of the account
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    // method to display the account balance 
    showBalance() {
        console.log("balance: " + this.balance + " EUR");
    }

    // method to display amount into account
    deposit(amount) {
        console.log("deposit of " + amount + " EUR");
        this.balance += amount;
        this.showBalance();
    }

    // method to withdraw money from the account
    withdraw(amount) {
        // check if the amount to withdraw is greater than the balance
        if(amount > this.balance) {
            console.log("withdrawal denied !");
        }
        else {
            console.log("withdrawal of " + amount + " EUR");
            this.balance -= amount;
            this.showBalance();
        }
    }
}

// create an instance of BankAccount with the owner's name and initial balance
const myAccount = new BankAccount("Mouhamed", 500);
console.log(myAccount)
myAccount.showBalance();
myAccount.deposit(100)
myAccount.withdraw(200)


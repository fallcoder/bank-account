class BankAccount {
    // constructor initializes the owner and the balance of the account
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
    }

    // method to display the account balance 
    showBalance() {
        console.log("balance: " + this.balance + " EUR");
    }

    // method to display amount into account
    deposit(amount) {
        console.log("deposit of " + amount + " EUR");
        this.balance += amount;
        this.transactions.push(`deposit of ${amount} EUR`);
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
            this.transactions.push(`withdrawal of ${amount} EUR`)
            this.showBalance();
        }
    }

    // new: method to get transaction history
    getTransactionHistory() {
        console.log("\ntransactions history")
        this.transactions.forEach(transaction => console.log(transaction))
    }
}

// create an instance of BankAccount with the owner's name and initial balance
const myAccount = new BankAccount("Mouhamed", 500);
console.log(myAccount)
myAccount.showBalance();
myAccount.deposit(100)
myAccount.withdraw(200)
myAccount.getTransactionHistory()


class BankAccount {
    // constructor initializes the owner and the balance of the account
    constructor(owner, balance, dailyLimit) {
        this.owner = owner; // account owner
        this.balance = balance; // account balance
        this.dailyLimit = dailyLimit; // daily withdrawl limit
        this.totalWithdrawnToday = 0; // total amount withdrawn today
        this.transactions = []; // list of transactions
    }

    // method to display the account balance 
    showBalance() {
        console.log("balance: " + this.balance + " EUR");
    }

    // deposit money into account
    deposit(amount) {
        console.log("deposit of " + amount + " EUR");
        this.balance += amount;
        this.transactions.push(`deposit of ${amount} EUR`);
        this.showBalance();
    }

    // withdraw money from the account respecting the daily limit   
    withdraw(amount) {
        // check if the amount to withdraw is greater than the balance
        if(amount > this.balance) {
            console.log("withdrawal denied !");
        }
        // check if the daily limit is respected
        else if((this.totalWithdrawnToday + amount) > this.dailyLimit) {
            console.log("withdrawal denied ! daily withdrawal reached");
        }
        else {
            console.log("withdrawal of " + amount + " EUR");
            this.balance -= amount;
            this.totalWithdrawnToday += amount;
            this.transactions.push(`withdrawal of ${amount} EUR`)
            this.showBalance();
        }
    }

    // reset daily withdrawal total
    resetDailyWithdrawals() {
        this.totalWithdrawnToday = 0;
    }

    // method to get transaction history
    getTransactionHistory() {
        console.log("\ntransactions history")
        this.transactions.forEach(transaction => console.log(transaction))
    }
}

// create an instance of BankAccount with the owner's name, initial balance and daily withdrawn limit
const myAccount = new BankAccount("Mouhamed", 500, 200);
console.log(myAccount)
myAccount.showBalance(); // display the initial account balance
myAccount.deposit(100) // amount deposit
myAccount.withdraw(200) // withdraw allowed since it's under the limit
myAccount.withdraw(250) // withdraw declined since it exceeds the daily limit
myAccount.getTransactionHistory() // display the transactions history


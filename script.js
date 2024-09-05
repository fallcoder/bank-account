class BankAccount {
    // constructor initializes the owner and the balance of the account
    constructor(owner, balance, dailyLimit) {
        // validate the initial balance and daily limit are numbers
        if(typeof balance !== 'number' || isNaN(balance)) {
            throw new Error("initial balance must be a valid number");  
        }
        if(balance < 0) {
            throw new Error("initial balance cannot be negative");    
        }
        if(typeof dailyLimit !== 'number' || isNaN(dailyLimit)) {
            throw new Error("daily limit must be a valid number");  
        }
        if(dailyLimit <= 0) {
            throw new Error("daily limit must be positive");
        }

        this.owner = owner; // account owner
        this.balance = balance; // account balance
        this.dailyLimit = dailyLimit; // daily withdrawal limit
        this.totalWithdrawnToday = 0; // total amount withdrawn today
        this.transactions = []; // list of transactions
        this.currentDate = new Date().toDateString(); // store the current dat
    }

    // method to display the account balance 
    showBalance() {
        console.log("balance: " + this.balance + " EUR");
    }

    // makes a deposit and add it to transaction history
    deposit(amount) {
        if(typeof amount !== 'number' || isNaN(amount)) {
            throw new Error("deposit amount must be a valid number");
        }
        if(amount <= 0) {
            console.log("deposit amount must be positive");
            return;
        }
        this.balance += amount;
        // transactions record with date and time
        this.transactions.push({
            type: "deposit",
            amount: amount,
            date: new Date()
        });
        console.log(`deposit of ${amount} EUR`);
        this.showBalance();
    }

    // makes a deposit and add it to transaction history 
    withdraw(amount) {
        const today = new Date().toDateString();
        // reset daily withdrawals if the date has changed
        if(today !== this.currentDate) {
            this.totalWithdrawnToday = 0;
            this.currentDate = today;
        }

        // calculate the total withdrawn made today
        const totalWithdrawnToday = this.transactions
            .filter(t => t.type === "withdrawal" && new Date(t.date).toDateString() === today)
            .reduce((total, t) => total + t.amount, 0);

        if(typeof amount !== 'number' || isNaN(amount)) {
            throw new Error("withdrawal amount must be a valid number");
        }
        if(amount <= 0) {
            console.log("withdrawal amount must be positive");
            return;
        }
        // check if the amount to withdraw is greater than the balance
        if(amount > this.balance) {
            console.log("withdrawal denied !");
        }
        // check if the daily limit is respected
        else if((totalWithdrawnToday + amount) > this.dailyLimit) {
            console.log("withdrawal denied ! daily withdrawal reached");
        }
        else {
            this.balance -= amount;
            // transactions record with date and time
            this.transactions.push({
                type: "withdrawal",
                amount: amount,
                date: new Date()
            }); 
            console.log(`withdrawal of ${amount} EUR`);
            this.showBalance();
        }

    }

    // method to get transaction history
    getTransactionHistory() {
        console.log("\ntransactions history")
        this.transactions.forEach(transaction =>
            console.log(`${new Date(transaction.date).toLocaleString()} - ${transaction.type}: ${transaction.amount} EUR`)
        );
    }
}

// create an instance of BankAccount with the owner's name, initial balance and daily withdrawn limit
try {
    const myAccount = new BankAccount("Mouhamed", 500, 200);
    //console.log(myAccount)
    myAccount.showBalance(); // display the initial account balance
    myAccount.deposit(-100) // amount deposit
    myAccount.withdraw(60) // withdraw allowed since it's under the limit
    myAccount.withdraw(60)
    myAccount.withdraw(150) // withdraw declined since it exceeds the daily limit
    myAccount.getTransactionHistory() // display the transactions history
}
catch(error) {
    console.error("Error: " + error.message);
}



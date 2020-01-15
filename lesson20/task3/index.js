// Wallet

class Wallet {
    _ballance = 0;

    // constructor() {
    //     this._ballance = 0;
    // }


    getBallance() {
        return this._ballance;
    }


    deposit(amount) {
        this._ballance += amount;
    }

    withdraw(amount) {
        if (amount > this._ballance) {
            console.log('Not enough funds');
            return;
        }

        this._ballance -= amount;
    }
}

const wallet1 = new Wallet();

// Wallet1._balance

console.log(wallet1.getBallance());
wallet1.deposit(45);
console.log(wallet1.getBallance());
wallet1.withdraw(34);
console.log(wallet1.getBallance());
wallet1.withdraw(134);

// console.log(wallet1.#ballance);

export class Wallet {
    _balance = 0;

    getBalance() {
        return this._balance;
    }

    deposit(num) {
        this._balance += num;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log('No enough funds');
            return;
        }
        this._balance -= amount;
    }
}
// Wallet

class Wallet {#
    ballance = 0;

    // constructor() {
    //     this._ballance = 0;
    // }


    getBallance() {
        return this.#ballance;
    }


    deposit(amount) {
        this.#ballance += amount;
    }

    withdraw(amount) {
        if (amount > this.#ballance) {
            console.log('Not enough funds');
            return;
        }

        this.#ballance -= amount;
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
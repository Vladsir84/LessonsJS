export class Wallet {
    _balance = 0;

    getBalance() {
        return this._balance;
    }


    deposit(sum) {
        this._balance += sum;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log('No enough funds');
            return;
        }

        this._balance -= amount;
    }
}

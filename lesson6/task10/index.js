function withdraw(clients, balances, client, amount) {
    let sum = 0;
    let index, costs;
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] === client) {
            index = i;
            break;
        }
    }
    costs = balances[index];
    sum = costs - amount;
    if (sum <= 0) {
        return -1;
    } else return sum;
}
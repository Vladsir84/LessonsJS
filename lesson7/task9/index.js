function withdraw(clients, balances, client, amount) {
    let clientId = clients.findIndex(item => (item === client));
    return balances[clientId] = amount > balances[clientId] ?
        -1 : balances[clientId] - amount;
};
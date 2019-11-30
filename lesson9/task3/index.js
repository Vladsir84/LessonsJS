const getCustomersList = obj => Object.entries(obj)
    .sort((customer1, customer2) => customer1.age > customer2.age ? 1 : -1)
    .map(item => item = {...item[1], id: item[0] });
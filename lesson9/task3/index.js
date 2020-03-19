const customers = {
    'customer-id-1':{
        name: 'Wiliam',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17,
    }
};


const getCustomersList = customers => Object.entries(customers)
 .map(customer => customer = {...customer[1] , id: customer[0]} )
 .sort((a, b) => a.age - b.age);

  console.log(getCustomersList(customers));
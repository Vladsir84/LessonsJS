//sortContacts

const contacts = [{
        name: 'Tom',
        phoneNumber: '666-66-66',
    },
    {
        name: 'John',
        phoneNumber: '555-55-55',
    },
    {
        name: 'Ann',
        phoneNumber: '333-33-33',
    },
    {
        name: 'Stephan',
        phoneNumber: '444-44-44',
    },
    {
        name: 'Suzy',
        phoneNumber: '222-22-22',
    },
    {
        name: 'Adel',
        phoneNumber: '111-11-11',
    },
];

const sortContacts = (contacts, isAsc = true) => {
    if (!Array.isArray(contacts)) return null;
    return contacts
        .sort((a, b) => isAsc === true ?
            a.name.localeCompare(b.name) :
            b.name.localeCompare(a.name));
};

console.log(sortContacts(contacts));
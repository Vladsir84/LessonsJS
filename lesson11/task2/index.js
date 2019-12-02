const sortContacts = (contacts, isAsc = true) => {
    if(!Array.isArray(contacts)) return null;
    return contacts
        .sort((a, b) => isAsc === true ? 
        a.name.localeCompare(b.name) :
        b.name.localeCompare(a.name));    
    };

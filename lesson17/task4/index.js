export let user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return(`${this.firstName} ${this.lastName}`);
    },
    
    setFullName(fullName) {
        let split = fullName.split('');
        this.firstName = split[0];
        this.lastName = split[1];
    }
};
    
// console.log(user.firstName);
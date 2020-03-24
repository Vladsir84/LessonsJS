export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return(`${this.firstName} ${this.lastName}`);
    },
    
    setFullName(value) {
        let split = value.split('');
        this.firstName = split[0];
        this.lastName = split[1];
    }
};
    
console.log(user.firstName);
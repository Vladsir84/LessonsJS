    const user = {
            firstName: 'John',
            lastName: 'Doe',
            getFullName() {
                return (`${this.firstName} ${this.lastName}`);
            },

            setFullName(fullName) {
                let elem = fullName.split(' ');
                [this.firstName, this.lastName] = elem;
             }
        }
       

    const user = {
            firstName: 'John',
            lastName: 'Doe',
            getFullName() {
                return (`${this.firstName} ${this.lastName}`);
            },

            setFullName(fullName) {
                let elem = fullName.split(' ');
                elem = [this.firstName, this.lastName];
            }
        }
        // console.log(user.getFullName());

    // user.setFullName("Tom Black");
    // console.log(user.getFullName());
    // user.getFullName();

    // const func = user.getFullName.bind(user);
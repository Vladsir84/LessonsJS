// import { bind } from './index';



// it("should be used instead method .bind()", () => {
//     const student = { status: 'Student' };

//     function getStudent(name) {
//         this.studentName = studentName;
//         this.name = name;
//     }

//     const getStudent = bind(student);
//     getStudent("Vladimir");
//     const resName = student.name;
//     expect(resName).toEqual("Vladimir");
// });


// it("should be used instead method .bind()", () => {
//     const student = { name: "Bruce" };
//     const madeline = { name: "Madeline" };

//     function update(occupation, birthYear) {
//         this.birthYear = birthYear;
//         this.occupation = occupation;
//     }

//     const updateBruce = bind(update, bruce, 1949);
//     updateBruce.call(madeline, "king", 1274);
//     const resOnlyYear = bruce.birthYear;
//     expect(resOnlyYear).toEqual(1274);
// });


// it("should be used instead method .bind()", () => {
//     const bruce = { name: "Bruce" };
//     const madeline = { name: "Madeline" };

//     function update(occupation, birthYear) {
//         this.birthYear = birthYear;
//         this.occupation = occupation;
//     }

//     const updateBruce = bind(update, bruce, 1949);
//     updateBruce("actor");
//     updateBruce.call(madeline, "king", 1274);
//     const resNewOccupation = bruce.occupation;
//     expect(resNewOccupation).toEqual("king");
// });

import { bind } from './index';

it('should get my status', () => {
    let user = {
        status: 'student',
    }

    function getStatus(school) {
        return `My status is a ${this.status} of ${school}`;
    }
    let getUser = bind(getStatus, user);
    let res = getUser('Gromcode');
    expect(res).toEqual('My status is a student of Gromcode');
});

it('should get my firstName', () => {
    let user = {
        firstName: 'Vladimir',
    }

    function getFirstName() {
        return `My firstName is ${this.firstName}`;
    }
    let getUser = bind(getFirstName, user);
    let res = getUser();
    expect(res).toEqual('My firstName is Vladimir');
});

it('should get my lastName', () => {
    let user = {
        lastName: 'Sirenko',
    }

    function getLastName() {
        return `My lastName is ${this.lastName}`;
    }
    let getUser = bind(getLastName, user);
    let res = getUser();
    expect(res).toEqual('My lastName is Sirenko');
});












// it('get full-name and undefined street (didn"t pass the parameter)', () => {
//     function showFullName(street) {
//         return `My full name is ${this.name} ${this.lastName}. I live on ${street}`;
//     }
//     let user = {
//         name: 'Bob',
//         lastName: 'Marley',
//     }
//     let firstUser = bind(showFullName, user);
//     let result = firstUser(); // no parameter
//     expect(result).toEqual('My full name is Bob Marley. I live on undefined');
// });

// it('get changed last-name and undefined street (didn"t pass the parameter)', () => {
//     function showFullName(street) {
//         return `My full name is ${this.name} ${this.lastName}. I live on ${street}`;
//     }
//     let user2 = {
//         name: 'Aleksey',
//     }
//     let firstUser = bind(showFullName, user2);
//     user2.lastName = 'Naumenko';
//     let result = firstUser(); // no parameter
//     expect(result).toEqual('My full name is Aleksey Naumenko. I live on undefined');
// });
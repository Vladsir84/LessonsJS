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












/

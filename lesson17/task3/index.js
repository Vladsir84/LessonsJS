export function defer(func, ms) {
    return function() {
        setTimeout(() => func.call(this, ...arguments), ms);
    }
}

const user = {
    name: 'Tom',
    sayHi() {
        console.log(`Hi, I'm ${this.name}!`)
    }
}

const deferredHii = defer(user.sayHi, 2000);
deferredHii.call({ name: 'Bob'});

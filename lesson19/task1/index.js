// vehicle and ship

// const vehicle = {
//     move() {
//         console.log('moving');
//     },
//     stop() {
//         console.log('stopped');
//     }
// };

// const ship = {
//     name: 'Aurora',
//     hasWheels: false,
//     LiftAnchorDown() {
//         console.log('lifting anchor down');
//     },
//     LiftAnchorUp() {
//         console.log('lifting anchor up');
//     },

//     // __proto__: vehicle
// };

// // ship.move();

// // console.log(ship);

// Object.setPrototypeOf(ship, vehicle);

// ship.move();

// console.log(ship);


const vehicle = {
    move() {
        console.log(`${this.name} moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
        console.log('stopped');
    }
};

const ship = {
    name: 'Aurora',
    hasWheels: false,
    LiftAnchorDown() {
        console.log('lifting anchor down');
    },
    LiftAnchorUp() {
        console.log('lifting anchor up');
    },
};


Object.setPrototypeOf(ship, vehicle);

// console.log(ship);

ship.move()
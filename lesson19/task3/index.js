// own props


const vehicle = {
    isMoving: false,
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

for (let prop in ship) {
    if (ship.hasOwnProperty(prop)) {
        console.log(prop);
    }

}


console.log(Object.keys(ship));
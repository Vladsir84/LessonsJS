export const vehicle = {
    name: 'Argo',   
    move() {
        console.log(`${this.name} moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
};


export const ship = {
   
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move()
    },
    stopMachine() {
        this.stop()
        console.log(`${this.name} lifting anchor down`);
    },
    
};

Object.setPrototypeOf(ship, vehicle);
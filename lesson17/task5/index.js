export const timer = {
    timerId: 0,
    minsPassed: 0,
    secondsPassed: 0,

    startTimer() {
        this.timerId = setInterval(() => {

            if (this.secondsPassed == 60) {
                this.minsPassed++;
                this.secondsPassed = 0;
            }
            this.secondsPassed += 5;
        }, 5000);
    },

    getTime() {
        return this.secondsPassed < 10 ?
            `${this.minsPassed}:0${this.secondsPassed}`:
            `${this.minsPassed}:${this.secondsPassed}`;
    },

    stopTimer() {
        clearInterval(this.timerId);
    },

    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },

}
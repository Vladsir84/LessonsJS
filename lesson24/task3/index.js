// export const getDiff = (startDate, endDate) => formatter.format(date);

// function msToTime(duration, show_days) {
export const getDiff = (startDate, endDate) => {
    const result = Math.abs(endDate - startDate);
    const seconds = parseInt((result / 1000) % 60);
    const minutes = parseInt((result / (1000 * 60)) % 60);
    const hours = parseInt((result / (1000 * 60 * 60)) % 24);
    const days = parseInt(result / (1000 * 60 * 60 * 24));
    // hours = (hours < 10) ? "0" + hours : hours;
    // minutes = (minutes < 10) ? "0" + minutes : minutes;
    // seconds = (seconds < 10) ? "0" + seconds : seconds;


    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(getDiff(new Date(2019, 2, 5, 7, 30, 0), new Date(2019, 0, 1, 2, 15, 10)));
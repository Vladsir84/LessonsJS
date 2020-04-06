export function getDiff(startDate, endDate) {
    const diffInTime = Math.abs(endDate - startDate) / 1000;
    const days = Math.floor(diffInTime / 60 / 60 / 24);
    const hours = Math.floor(diffInTime  / 60 / 60 % 24);
    const minutes = Math.floor(diffInTime  / 60 % 60);
    const seconds = Math.floor(diffInTime  % 60);
   
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

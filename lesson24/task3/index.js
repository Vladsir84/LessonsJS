export const getDiff = (startDate, endDate) => {
    const result = Math.abs(endDate - startDate);
    const seconds = parseInt((result / 1000) % 60);
    const minutes = parseInt((result / (1000 * 60)) % 60);
    const hours = parseInt((result / (1000 * 60 * 60)) % 24);
    const days = parseInt(result / (1000 * 60 * 60 * 24));
    
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

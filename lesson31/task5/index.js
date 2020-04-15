export const delay = ms => {
    return new Promise(resolve => setTimeout(resolve, ms), 3000);
}

// delay(3000).then(() => console.log('Done'));

const timeInSeconds = [4, 5, 2, 10, 0];
  function delay (seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(seconds);
        }, seconds *10);
    });
}

 async function result () {
    let totalTimeForNextIteration = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const time of timeInSeconds) {
        totalTimeForNextIteration += time;
        // eslint-disable-next-line no-await-in-loop
       await  delay(totalTimeForNextIteration);
        console.log(time);
    }
}

 result();
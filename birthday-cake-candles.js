function birthdayCakeCandles(candles){
    // Write your code here

    let count = 0;

    for(let i = 0; i < candles.length; i++){
        if (candles[i] === Math.max(...candles))
            count += 1;
    }
    return count;
}

console.log(birthdayCakeCandles([4, 4, 1, 3]))
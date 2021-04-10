function birthdayCakeCandles(candles) {
    // Write your code here

    let max = Math.max(...candles);

    return candles.filter(item => item === max).length;
}

console.log(birthdayCakeCandles([4, 4, 1, 3]))
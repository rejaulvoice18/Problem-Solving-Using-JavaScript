function miniMaxSum(arr) {

    let sum = 0;
    let min = arr[0];
    let max = arr[arr.length-1];


    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;
    }

    const small = BigInt(sum - max).valueOf();
    const big = BigInt(sum - min).valueOf();

    console.log(small,big);

}

miniMaxSum([1, 3, 5, 7, 9]);
function miniMaxSum(arr) {

    let minAndMax = [0, 0];

    for(let i = 0; i < arr.length-1; i++){
        const element = arr[i];
        minAndMax[0] += element; 
    }

    for(let j = 1; j < arr.length; j++){
        const element = arr[j];
        minAndMax[1] += element;
    }

    console.log(minAndMax.join(" "));

}

miniMaxSum([1,3,5,7,9]);
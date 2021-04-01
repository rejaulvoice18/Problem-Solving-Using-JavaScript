function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    let total = arr.length;
    
    for (let i = 0; i < total; i++){
        if(arr[i] > 0){
            positive++;
        }
        else if (arr[i] < 0){
            negative++;
        }
        else{
            zero++;
        }
    }
    console.log((positive / total).toPrecision(6))
    console.log((negative / total).toPrecision(6))
    console.log((zero / total).toPrecision(6))
}

const threeResult = plusMinus([2,-4,-3,-3,0,0]);
console.log(threeResult);
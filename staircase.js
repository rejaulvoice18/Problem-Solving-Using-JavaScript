function staircase(n){
    let finalStairCase = "";

    for(let i = 1; i<= n; i++){

        for( let j = n - 1; j >= i; j--){
            finalStairCase += " "; 
        }

        for(let k = 1; k <= i; k++){
            finalStairCase += "#";
        }

        finalStairCase += "\n";
    }
    console.log(finalStairCase);
}

staircase(6);
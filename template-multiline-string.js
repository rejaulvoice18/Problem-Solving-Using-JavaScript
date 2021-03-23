function myString(N){
    string = [];

    if(N % 2 == 0){
        for(var i = 0; i < N-1; i++){
            string[i] = 'a';
        }
        string[i] = 'b';
    }
    else{
        for(var i = 0; i < N; i++){
            string[i] = 'a';
        }
    }

    return string;
   
}

const outPut = myString(8);

console.log(outPut);
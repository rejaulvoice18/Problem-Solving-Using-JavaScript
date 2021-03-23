function linearSearch(array, target){
    for(var i = 0; i < array.length; i++){
        if( array[i] === target ){
            return array[i];
        }
    }
    return -1;
}

const result = linearSearch([22,30,40,2,3,8,02,9,80,90], 9);
console.log(result);
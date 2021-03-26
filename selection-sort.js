function selectionSort(array){

    for(let i = 0; i < array.length; i++){
        let min = i;

        for (let j = i+1; j < array.length; j++){
            if (array[j] < array[min]){
                min = j;
            }
            if ( i !== min){
                [array[i], array[min]] = [array[min], array[i]];
            }
        }
    }
    return array;
}
(function test(){
    const arrayTest1 = [90, 800, 20, 400, 300,80, 30, 19, 2, 1];
    const arrayTest2 = [80, 30, 20, 1, 29, 2, 4, 9, 300, 8999, 800];
    const arrayTest3 = [69, 44, 55, 0, 30, 19, 30, 19, 2, 1];
    const arrayTest4 = [5, 90, 20, 1, 69, 44, 55, 35, 300, 54, 2];
    
    console.log(selectionSort(arrayTest1));
    console.log(selectionSort(arrayTest2));
    console.log(selectionSort(arrayTest3));
    console.log(selectionSort(arrayTest4));
})()
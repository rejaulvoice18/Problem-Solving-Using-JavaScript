const arrElement = [1, 4, 6, 8, 9, 11, 14, 15, 20, 25, 33, 83, 87, 97, 99, 100];

function binarySearch(n, num){
    let low_index = 0;
    let high_index = n.length - 1;

    while (low_index <= high_index){
        let mid_index = Math.floor((low_index + high_index) / 2);

        if (n[mid_index] === num){
            return n[mid_index] + ' ' + 'Is the matched number';
        }else if (n[mid_index] < num){
            low_index = mid_index + 1;
        } else {
            high_index = mid_index -1;
        }
    }
    return -1;
}


const binary = binarySearch(arrElement, 11);
console.log(binary);
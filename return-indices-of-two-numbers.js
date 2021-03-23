var twoSum = function (number, target) {
    var output = [];
    for (var i = 0; i < number.length; i++) {
        for (var j = i + 1; j < number.length; j++) {
            if (number[i] + number[j] === target) {
                output.push(i);
                output.push(j);
            }
        }
    }
    return output;
}
const array = [3,3];
const result = twoSum(array, 6);

// console.log(array.length);

console.log(result);
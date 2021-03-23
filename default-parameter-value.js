// function add(num1, num2){
//     return num1 + num2;
// }
// incase we forgot to set any parameter value between 2 or three then we have to set default parameter value.
function add(num1, num2){
    if(num2 == undefined ){
        num2 = 0;
    }
    return num1 + num2;
}

//solution 2
// function add(num1, num2){
//     num2 = num2 || 0;
//     return num1 + num2;
// }

//solution 3. At ES6 version they find out a easy solution for default value. that is.

function add(num1, num2 = 0){
    return num1+ num2;
}
const total = add(20);
console.log(total);
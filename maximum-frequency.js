function frequency(num){
    // var data = input.split('\n')
    // var num = parseInt(data[0]);
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < num.length; i++) {
        for (var j = i; j < num.length; j++) {
            if (num[i] == num[j])
                m++;
            if (mf < m) {
                mf = m;
                item = num[i];
            }
        }
        m = 0;
    }
    console.log(item + " ( " + mf + " times ) ");
}

console.log(frequency([1,1,1,2,2]));
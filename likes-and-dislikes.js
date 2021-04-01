function main(input){
    
    var data = input().split('\n');
    var alice = data[0].split(' ');
    var aLen = parseInt(alice[0]);
    var bob = data[1].split(' ');
    var bLen = parseInt(bob[1]);
    let count = 0;
    for(let i = 0; i< aLen.length; i++){
        if(aLen[i] == bLen[i]){
            count += 1;
        }
    }
    console.log(count);

}

main([0,1,0,1,0,1],[1,0,1,1,0,1]);
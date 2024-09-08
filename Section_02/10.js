let N = 5;
for(let i=0;i<N;i++){
    let bag = '';
    for(let j=1;j<=i+1;j++){
       if(j%2==1){
        bag+='1'
       }else{
        bag+='0'
       }
    }console.log(bag)
}

// 1
// 10
// 101
// 1010
// 10101
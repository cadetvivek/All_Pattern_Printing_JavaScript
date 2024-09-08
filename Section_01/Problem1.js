let N = 5;
for(let i=0;i<N;i++){
    let bag = '';
    for(let j=0;j<N;j++){
        if(i==0||j==N-1||i==N-1||j==0){
            bag+='*'
        }else{
            bag+=' '
        }
       
    } console.log(bag)
}

// *****
// *   *
// *   *
// *   *
// *****
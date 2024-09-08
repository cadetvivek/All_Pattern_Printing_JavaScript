let N = 4;
for(let i=0;i<N;i++){
    let bag = "";
    for(let j=0;j<N;j++){
        if(i==j){
            bag+='\\'
        }else{
            bag+=' '
        }
    }
    for(let j=0;j<N;j++){
        if(i+j==N-1){
            bag+='/'
        }else{
            bag+=' '
        }
    }
 //console.log(bag)

 for(let j=0;j<N;j++){
    if(i==j){
        bag+='\\'
    }else{
        bag+=' '
    }
}
for(let j=0;j<N;j++){
    if(i+j==N-1){
        bag+='/'
    }else{
        bag+=' '
    }
}
console.log(bag)
}

// \      /\      /
//  \    /  \    /
//   \  /    \  /
//    \/      \/
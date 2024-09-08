let N = 5;
for(let i=1;i<=N;i++){
    let bag = '';
   for(let j=1;j<=i;j++){
       bag+=' '
   }
    //console.log(bag)
    
     for(let j=N-i+1;j>=1;j--){
        bag+=j
    }
    
    console.log(bag)
}


// 54321
//  4321
//   321
//    21
//     1
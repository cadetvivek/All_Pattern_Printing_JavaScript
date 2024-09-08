let N = 5;

for(let i=1;i<=N;i++){
    let bag = '';

    for(let j=1;j<=i;j++){
       if(i==N||j==1||i==j){
           bag+='*'
       }else{
           bag+=' '
       }
    }
    console.log(bag)
}



// *
// **
// * *
// *  *
// *****
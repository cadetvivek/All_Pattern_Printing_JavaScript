let N = 6;

for(let i=1;i<=N;i++){
    let bag = "";
for(let j=1;j<=N-i+1;j++){
 bag+=' '
}
for(let k=0;k<2*i-1;k++){
   bag+='*'
}
console.log(bag)

}




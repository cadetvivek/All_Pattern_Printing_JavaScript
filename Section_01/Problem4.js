let N = 4;

for(let i=1;i<=N;i++){
    let bag = "";
for(let j=1;j<=N-i;j++){
 bag+=' '
}
for(let k=1;k<=i;k++){
    bag+=k
  
}
//reverse part
 for (let l=i-1;l>=1;l--) {
        bag += l;
    }
console.log(bag)
}



    1
   121
  12321
 1234321
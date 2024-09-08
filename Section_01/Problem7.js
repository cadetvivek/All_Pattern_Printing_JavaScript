
let N =6
for(let i=1;i<=N;i++){
  let str1 =''
  for(let j=1;j<=i;j++){
    str1+='*'
   
  }
  console.log(str1)
}


for(let i=1;i<=N;i++){
  let str2 =''
  for(let j=1;j<=N-i+1;j++){
    str2+='*'
   
  }
  console.log(str2)
}



// *
// **
// ***
// ****
// *****
// ******
// ******
// *****
// ****
// ***
// **
// *
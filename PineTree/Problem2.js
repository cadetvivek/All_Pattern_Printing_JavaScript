let bag = ''
let n = 5
 for (let i = 1; i <= n; i++) {
   let bag = '';

   // Add spaces for alternate rows
   if (i % 2 === 0) {
     bag += ' ';
   }

   // Add the square blocks
   for (let j = 1; j <= n; j++) {
     bag += '[]';
   }

   console.log(bag);
 }



//  [][][][][]
//   [][][][][]
//  [][][][][]
//   [][][][][]
//  [][][][][]
    let n = 5;
    // Print the pyramid
    for (let i = 1; i <= n; i++) {
      let row = '';
  
      // Add spaces before stars
      for (let j = 1; j <= (n - i); j++) {
        row += ' ';
      }
  
      // Add stars
      for (let k = 1; k <= (2 * i - 1); k++) {
        row += '*';
      }
  
      console.log(row);
    }
  
    // Print the vertical line at the bottom (trunk)
    let bag = '';
  
    // Add spaces before the vertical line
    for (let j = 1; j <= (n - 1); j++) {
      bag += ' ';
    }
  
    // Add the vertical line
    bag += '|';
    console.log(bag);
  
  
//      *
//     ***
//    *****
//   *******
//  *********
//      |
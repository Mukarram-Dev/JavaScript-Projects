import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum=0;
  const arrLength = arr.length;
  arr.sort((a,b)=>a-b);
   minSum = arr.slice(0,4).reduce((sum,num)=>sum +num,0);
   maxSum = arr.slice(1,5).reduce((sum,num)=>sum +num,0);
  
    
  console.log(`${minSum} ${maxSum}`);
}

async function main() {
  let arr = [1, 2, 3, 4, 5];

  miniMaxSum(arr);
}

main();

import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function plusMinus(arr) {
  console.log(arr);
}

async function main() {
  let arr = [];
  
  const n =await rl.question("Enter the size of array: ");

  for (let i = 0; i < n; i++) {
    let element = await rl.question("Enter the element for array " + i + 1+ ' : ');
    arr.push(element);
  }

  plusMinus(arr);
}

main();

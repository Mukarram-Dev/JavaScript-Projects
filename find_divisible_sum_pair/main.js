import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function plusMinus(arr, k) {
  let pairCount = 0;
  let arrLength=arr.length;
  for (let i = 0; i < arrLength; i++) {
    console.log(`value of i at ${i}  : ${arr[i]}`);

    for (let j = i+1 ; j< arrLength; j++) {
      console.log(`sum of ${arr[i]} + ${arr[j]}`);

      if ((arr[i] + arr[j]) % (k) == 0) {
        console.log(`true`);

        pairCount++;
      }
    }
  }
  console.log(pairCount);
}

async function main() {
  let arr = [];

  const n = await rl.question("Enter the size of array: ");

  for (let i = 0; i < n; i++) {
    let element = await rl.question(
      "Enter the element for array " + (i + 1) + " : "
    );
    arr.push(parseInt(element));
  }

  console.log(`Your array is this : ${arr}\n`);

  let k = await rl.question("Enter the divisible number: ");

  plusMinus(arr, k);
}

main();

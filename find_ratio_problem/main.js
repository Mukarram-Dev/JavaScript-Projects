import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function plusMinus(arr) {
  let positiveCount = 0;
  let negativeCouunt = 0;
  let zeroCount = 0;

  arr.forEach((element) => {
    if (element == 0) {
      zeroCount++;
    } else if (element < 0) {
      negativeCouunt++;
    } else {
      positiveCount++;
    }
  });
  const posRatio = positiveCount/arr.length;
  const negRatio = negativeCouunt/arr.length;
  const zeroRatio = zeroCount/arr.length;

  console.log(`${posRatio.toPrecision(6)}\n${negRatio.toPrecision(6)}\n${zeroRatio.toPrecision(6)}`);

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

  plusMinus(arr);
}

main();

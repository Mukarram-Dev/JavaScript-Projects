import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function matchingString(s, q) {
  let frequencyMap = {};
  let countResult = [];

  for (var string of s) {
    frequencyMap[string] = (frequencyMap[string] || 0) + 1;
  }

  for (var query of q) {
    countResult.push(frequencyMap[query] || 0);
  }

  return countResult;
}

async function main() {
  let stringArr = [];
  let queryString = [];

  const arrayStrSize = parseInt(
    await rl.question("Enter the size of String array: ")
  );

  for (let i = 0; i < arrayStrSize; i++) {
    let element = await rl.question(
      "Enter the string for array " + (i + 1) + " : "
    );
    stringArr.push(element);
  }
  const quryStrSize = parseInt(
    await rl.question("Enter the size of Query String array: ")
  );
  for (let i = 0; i < quryStrSize; i++) {
    let element = await rl.question(
      "Enter  query string for matching " + (i + 1) + " : "
    );
    queryString.push(element);
  }

  console.log(`Your String array is this : ${stringArr}\n`);
  console.log(`Your Query array is this : ${queryString}\n`);

  let res = matchingString(stringArr, queryString);

  console.log(`result: ${res}`);
}

main();

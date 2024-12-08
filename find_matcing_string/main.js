import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function matchingString(s, q) {
  let countArr = Array.from({length:q.length},()=>0);
  for (let i = 0; i < q.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (q[i] == s[j]) {
        if (countArr[i] != null) {
          countArr[i]++;
        } else {
          countArr[i] = 0;
        }
      }
    }
  }
  return countArr;
}

async function main() {
  let stringArr = [];
  let queryString = [];

  const arrayStrSize = await rl.question("Enter the size of String array: ");
  

  for (let i = 0; i < arrayStrSize; i++) {
    let element = await rl.question(
      "Enter the string for array " + (i + 1) + " : "
    );
    stringArr.push(element);
  }
  const quryStrSize = await rl.question(
    "Enter the size of Query String array: "
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

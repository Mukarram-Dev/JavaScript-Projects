import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function processData(input) {
  const parts = input.split(";");
  let operation = parts[0];
  let type = parts[1];
  let word = parts[2];

  console.log(word.split(''));

  if (operation == "S") {
    splitCamelCase(word, type);
  } else if (operation == "C") {
    combineCamelCase(word, type);
  }
}

function splitCamelCase(word,type) {
  let res;

  if (type=='M') {
    
  } else {
    
  }

}

async function main() {
  // const n = await rl.question("Enter the string in this format S;V;iPad");

  // console.log(`Your input is : ${n}`);
  const input = "S;M;plasticCup()";

  const res = processData(input);

  console.log(res.join(" ") + "\n");
}

main();

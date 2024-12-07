import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function breakingRecords(scores) {
  let maxCount = 0;
  let minCount = 0;
  let minNum = scores[0];
  let maxNum = scores[0];

  scores.forEach((element) => {
    if (element > maxNum && element!=minNum && element!=maxNum) {
      maxNum = element;
      maxCount++;
    } else if (element < minNum && element!=minNum && element!=maxNum) { 
        minNum = element;
        minCount++;   
    } else {
     return;
    }
  });

  return [maxCount,minCount];
}

async function main() {
  let scores = [];

  const n = await rl.question("Enter the number of game plays: ");

  for (let i = 0; i < n; i++) {
    let element = await rl.question("Score for the Game " + (i + 1) + " : ");
    scores.push(parseInt(element));
  }

  console.log(`Your score is like this : ${scores}\n`);

  const res = breakingRecords(scores);

  console.log(res.join(" ") + "\n");
}

main();

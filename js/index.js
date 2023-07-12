// Iteration 1: Names and Input

// Iteration 2: Conditionals

// Iteration 3: Loops

let hacker1 = "Ana";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Bnai";
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

let spaceName = "";
for (let i = 0; i < hacker1.length; i++) {
  spaceName += " " + hacker1[i].toUpperCase();
}
console.log(spaceName);

let revName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  revName += hacker2[i];
}
console.log(revName);

// if (hacker1[0] < hacker2[0]) {
//   console.log("The driver's name goes first.");
// } else {
//   console.log("Yo, the navigator goes first definitely.");
// }

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  for (let i = 0; i <= Math.max(hacker1.length, hacker2.length) - 1; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log(`The ${hacker1} goes first`);

      break;
    } else {
      console.log(`Yo, the ${hacker2} goes first definitely.`);

      break;
    }
  }
}

//Bonus 1
// longText = "et et et"
let longText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

let textCut = longText;

let wordCounter = 0;

while (textCut.indexOf(" ") !== -1) {
  textCut = textCut.slice(textCut.indexOf(" ") + 1, textCut.length);

  wordCounter++;
}
wordCounter++;

console.log("Number of words " + wordCounter);

let etCounter = 0;
for (let i = 0; i < longText.length; i++) {
  if (
    (longText[i] === " " &&
      longText[i + 1] === "e" &&
      longText[i + 2] === "t" &&
      longText[i + 3] === " ") ||
    (longText[i] === "e" &&
      longText[i + 1] === "t" &&
      longText[i + 2] === undefined) ||
    (longText[i - 1] === undefined &&
      longText[i] === "e" &&
      longText[i + 1] === "t")
  ) {
    etCounter++;
  }
}

console.log("Number of ´et´ " + etCounter);

//Bonus 2

let filter = "";
// let phraseToCheck = "A man, a plan, a canal, Panama!";
// let phraseToCheck = "Amor, Roma";
let phraseToCheck = "race car"
// let phraseToCheck = "stack cats"
// let phraseToCheck = "step on no pets"
// let phraseToCheck = "taco cat"
// let phraseToCheck = "put it up"
// let phraseToCheck = "Was it a car or a cat I saw?"
// let phraseToCheck = "No 'x' in Nixon"

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] !== "!" &&
    phraseToCheck[i] !== "," &&
    phraseToCheck[i] !== "?" &&
    phraseToCheck[i] !== "'" &&
    phraseToCheck[i] !== " "
  ) {
    filter += phraseToCheck[i].toLowerCase();
  }
}

phraseToCheck = filter;

let kcehCoTesarhp = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  kcehCoTesarhp += phraseToCheck[i];
}


for (let i = 0; i <= phraseToCheck.length; i++) {
  if (kcehCoTesarhp[i] !== phraseToCheck[i]) {
    console.log("Not A Palindrome");
  break
} else if(i === phraseToCheck.length){


    console.log("Its A Palindrome!!!!");
}


}

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.round(r);
}

const min = 1;
const max = 20;
let rand = random(59, 60);

while (rand !== 60) {
  rand = random(59, 60);
  console.log(rand);
}

console.log("####");

do {
  console.log(rand);
  rand = random(59, 60);
} while (rand !== 60);

// const nome = "Bruno";
// let i = 0;

// while (i < nome.length) {
//   console.log(nome[i]);
//   i++;
// }

// console.log("Segue a vida...");

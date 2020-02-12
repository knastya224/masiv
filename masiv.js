let arr = [];

function getRandomInt(max) {
  return Math.round(Math.random() * Math.round(max));
}

for (let i = 0; i < 7; i++) {
  arr.push(getRandomInt(99));
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
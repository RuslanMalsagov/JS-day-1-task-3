const arrNumber = [2, 3, 6, 7, 5, 4, 3, -3, -5, -3];

let accumulator = 0;
let i = 0;

while (i < arrNumber.length) {
  if (arrNumber[i] > 0) {
    arrNumberSum += arrNumber[i];
  }
  i++;
}
console.log(arrNumberSum);

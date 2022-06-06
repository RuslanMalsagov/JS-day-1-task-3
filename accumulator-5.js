const arrNumber = [2, 3, 6, 7, 5, 4, 3, -3, -5, -3];

const accumulatorEven = [];

for (let i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] % 2 === 0) {
    accumulatorEven.push(arrNumber[i]);
  }
}
console.log(accumulatorEven);

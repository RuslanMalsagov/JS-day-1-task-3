const arrNumber = [2, 3, 6, 7, 5, 4, 3, -3, -5, -3];

const accumulatorOdd = [];
for (let i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] % 2 !== 0) {
    accumulatorOdd.push(arrNumber[i]);
  }
}

console.log(accumulatorOdd);

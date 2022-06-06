const arrNumbersTask6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arrNumbersTask6.length; i++) {
  if (arrNumbersTask6[i] % 2 === 0) {
    console.log(arrNumbersTask6[i]);
  }
}

let i = 0;
while (i < arrNumbersTask6.length) {
  if (arrNumbersTask6[i] % 2 !== 0) {
    console.log(arrNumbersTask6[i]);
  }
  i++;
}

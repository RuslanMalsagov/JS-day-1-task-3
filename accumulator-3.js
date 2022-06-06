const arrProgrammingLang = [
  "JavaScript",
  "C#",
  "C++",
  "Kotlin",
  "Java",
  "Python",
  "GO",
  "Fortran",
  "PHP",
  "Scratch",
];

let accumulator = [];
for (let i = 0; i < arrProgrammingLang.length; i++) {
  if (arrProgrammingLang[i].length > 3) {
    accumulator.push(arrProgrammingLang[i]);
  }
}

console.log(accumulator);

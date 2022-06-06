const arrMyTeam = [
  "Альви",
  "Султан",
  "Умар",
  "Адлан",
  "Микаил",
  "Райбек",
  "Андрей",
  "Вася",
  "Коля",
  "Осман",
];

const nameStartsWithA = [];

for (let i = 0; i < arrMyTeam.length; i++) {
  if (arrMyTeam[i][0] === "А" || arrMyTeam[i][0] === "а") {
    nameStartsWithA.push(arrMyTeam[i]);
  }
}
console.log(nameStartsWithA);

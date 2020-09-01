/*
 1 вариант решения, вроде как лучше, так как сразу же на первом несовпадении
 буквы выдаст false и не нужно всю строку преобразовывать в массив, затем снова в строку
*/

String.prototype.isPalindrome = function () {
  const check = this.replace(/\s/g, "").toLowerCase();
  for (let i = 0; i < check.length; i++) {
    if (check[i] !== check[check.length - i - 1]) {
      return false;
    }
  }
  return true;
};

/*
второй вариант
String.prototype.isPalindrome = function () {
  const check = this.replace(/\s/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  return check === this.replace(/\s/g, "").toLowerCase();
};
*/

// 2 задача
function getAverageMark(marks) {
  return !marks.length
    ? 0
    : Math.round(marks.reduce((a, e) => a + e) / marks.length);
}

// 3 задача
// Вспомогательная функция, которая считает кол-во високосных дней, прошедших с определенного года
const leapDays = (year) => {
  let currentYear = new Date().getFullYear();
  let days = 0;
  for (let i = year; i <= currentYear; i++) {
    if (new Date(i, 1, 29).getDate() === 29) {
      days++;
    }
  }
  return days;
};

function checkBirthday(birthday) {
  let diff = Date.now() - Date.parse(birthday); // высчитываем разницу по инструкции в задании

  // считаем сколько дней прожил пользователь, отнимаем дни високосных годов
  let days =
    Math.floor(diff / 1000 / 60 / 60 / 24) -
    leapDays(new Date(birthday).getFullYear());
  let age = days / 365; // дни делиим на 365 - получаем возраст
  return age >= 18; // работает с точностью до дня, если у пользователя сегодня день рождения и ему 18 - вернет true, если завтра уже false
}

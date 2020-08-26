// вспомогательная функция для перевода года в месяцы
const monthsParser = (date) =>
  (date.getFullYear() - new Date().getFullYear()) * 12;

function calculateTotalMortgage(
  percent = 10,
  contribution = 0,
  amount,
  date = 12
) {
  const values = [percent, contribution, amount, monthsParser(date)];

  for (const value of values) {
    if (Number.isNaN(parseInt(value))) {
      return `${value} содержит неправильное значение, введите число`;
    }
  }

  const loanDuration = monthsParser(date);
  const loanAmount = amount - contribution; // сумма кредита минус взнос
  const monthlyInterest = percent / 100 / 12; // процентная ставка в месяц
  const monthlyPayment =
    loanAmount *
    (monthlyInterest +
      monthlyInterest / ((1 + monthlyInterest) ** loanDuration - 1)); // ежемесячный платеж

  return +(monthlyPayment * loanDuration).toFixed(2);
}

// 2 задача
function getGreeting(name) {
  const message = "Привет, мир! Меня зовут";
  return !name ? `${message} Аноним` : `${message} ${name}`;
}

// 1 Задача
function getSolutions(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let result = {};
  result.D = d;
  if (d === 0) {
    let x1 = (-b / 2) * a;
    result.roots = [x1];
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a),
      x2 = (-b - Math.sqrt(d)) / (2 * a);
    result.roots = [x1, x2];
  } else if (d < 0) {
    result.roots = [];
  }
  return result;
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x2 + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D == 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else {
    console.log(
      `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
    );
  }
}

// 2 задача
// вспомогательная функция
const getAverageMark = (marks) => {
  return !marks.length ? 0 : marks.reduce((a, e) => a + e) / marks.length;
};

function getAverageScore(data) {
  if (!Object.entries(data).length) {
    return { average: 0 };
  }

  let average = 0;
  return Object.entries(data).reduce((acc, [subject, grades]) => {
    average += getAverageMark(grades);
    return {
      ...acc,
      [subject]: getAverageMark(grades),
      average: average / Object.values(data).length,
    };
  }, {});
}

// задача со звездочкой

function getPersonData(secretData) {
  let res = {};

  const names = {
    aaa: "firstName",
    bbb: "lastName",
  };

  for (const [key, value] of Object.entries(secretData)) {
    res = { ...res, [names[key]]: getDecodedValue(value) };
  }

  return res;
}

// Вспомогательная функция
function getDecodedValue(secret) {
  if (secret === 0) {
    return "Родриго";
  } else if (secret === 1) {
    return "Эмильо";
  }
  return null;
}

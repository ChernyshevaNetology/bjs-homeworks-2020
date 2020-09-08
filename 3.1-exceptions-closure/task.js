// 1 задание
const parseCount = (number) => {
  if (Number.isNaN(parseInt(number))) {
    throw new Error("Невалидное значение");
  } else {
    return parseInt(number);
  }
};

const validateCount = (value) => {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
};
// 2 задание
class Triangle {
  constructor(a, b, c) {
    if (this.isValid(a, b, c)) {
      this.a = a;
      this.b = b;
      this.c = c;
    } else {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  isValid(a, b, c) {
    return a + b > c && b + c > a && c + a > b;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const area = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(
      area * ((area - this.a) * (area - this.b) * (area - this.c))
    ).toFixed(3);
    return Number(result);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getArea() {
        return "Ошибка! Треугольник не существует";
      },
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}

class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjects = {};
  }

  getName() {
    return this.name;
  }

  showError(grade, subject) {
    return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`;
  }

  validate(grade, subject) {
    if (isNaN(grade)) {
      return this.showError(grade, subject);
    } else if (grade > 5) {
      return this.showError(grade, subject);
    }
  }

  addGrade(grade, subject) {
    if (!this.validate(grade, subject)) {
      let lesson = this.subjects[subject] || [];
      lesson.push(grade);
      this.subjects[subject] = lesson;
      console.log(this.subjects);
      return lesson.length;
    }
    return this.subjects[subject]
      ? `${this.validate(grade, subject)} \n ${this.subjects[subject].length}`
      : `${this.validate(grade, subject)} \n 0`;
  }

  getAverageBySubject(subject) {
    if (this.subjects[subject]) {
      let lesson = this.subjects[subject];
      return lesson.reduce((a, e) => a + e) / lesson.length;
    }
    return 0;
  }

  getTotalAverage() {
    const subjects = Object.values(this.subjects);
    let total = 0;
    if (subjects.length) {
      return (
        subjects.reduce((acc, grades) => {
          for (let i = 0; i < grades.length; i++, total++) {
            acc += grades[i];
          }
          return acc;
        }, 0) / total
      );
    }

    return 0;
  }
}

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, condition = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.condition = condition;
    this.type = type;
  }

  fix() {
    if (this.condition < 0) {
      this.condition = 0;
    } else if (this.condition * 1.5 > 100) {
      this.condition = 100;
    } else {
      this.condition = this.condition * 1.5;
    }
  }

  set state(value) {
    if (value < 0) {
      this.condition = 0;
    } else if (value > 100) {
      this.condition = 100;
    }
    this.condition = value;
  }

  get state() {
    return this.condition;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, condition, type = "magazine") {
    super(name, releaseDate, pagesCount, condition);
    this.type = type;
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, condition, type = "book") {
    super(name, releaseDate, pagesCount, condition);
    this.type = type;
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    condition,
    type = "novel"
  ) {
    super(author, name, releaseDate, pagesCount, condition, author);
    this.type = type;
  }
}

class FantasticBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    condition,
    type = "fantastic"
  ) {
    super(author, name, releaseDate, pagesCount, condition, author);
    this.type = type;
  }
}

class DetectiveBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    condition,
    type = "detective"
  ) {
    super(author, name, releaseDate, pagesCount, condition, author);
    this.type = type;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    console.log(this.books);
    for (const book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    console.log(this.books);
    for (const book of this.books) {
      if (book.name === bookName) {
        return this.books.splice(this.books.indexOf(book), 1)[0];
      }
    }
    return null;
  }
}

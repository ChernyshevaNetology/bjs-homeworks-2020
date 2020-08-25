function getResult(a,b,c) {
    let result = b ** 2 - 4 * a * c;

    if (result < 0) {
        return [];
    } else if(result === 0) {
        return [-b/2*a];
    } else if(result > 0) {
        return [(-b + Math.sqrt(result))/2*a, (-b - Math.sqrt(result))/2*a];
    }
}

function getAverageMark(marks){
    if (!marks.length) {
        return 0;
    }
  const result = marks.length > 5 ? marks.slice(0,5) : marks;

  return result.reduce((a,e) => a + e) / result.length;
}

function askDrink(name, dateOfBirthday) {

}

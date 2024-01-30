function digitalRoot(number) {
    while (number >= 10) {
      let digitSum = 0;
      while (number > 0) {
        digitSum += number % 10;
        number = Math.floor(number / 10);
      }
  
      number = digitSum;
    }
  
    return number;
  }
  
  console.log(digitalRoot(482845757));

function table(number, limit) {
    for (let i = 1; i <= limit; i++) {
      let result = number * i;
      console.log(number + " x " + i + " = " + result);
    }
  }
  
  table(2, 20);
  
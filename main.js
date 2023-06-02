function digitalRoot(n) {
  let str = String(n);
  let array = [];
  let result = 20;
  for (let i = 0; i < str.length; i++) {
    array.push(parseInt(str[i]));
  }
  do {
    result = array.reduce((item, akkum) => (akkum += item), 0);
  } while (result > 10);

  return result;
}

console.log(digitalRoot(456)); //6

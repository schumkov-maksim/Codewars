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

// console.log(digitalRoot(456)); //6

function solution(roman) {
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    let symbol = roman[i];
    switch (symbol) {
      case "I":
        result += 1;
        break;
      case "V":
        result += 5;
        break;
      case "X":
        result += 10;
        break;
      case "L":
        result += 50;
        break;
      case "C":
        result += 100;
        break;
      case "D":
        result += 500;
        break;
      case "M":
        result += 1000;
        break;
      default:
        return 0;
    }
  }
  return result;
}

//console.log(solution("IIIV"));

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {
  let array = [];

  for (let i = 1; i < size + 1; i++) {
    let newArr = [];
    for (let j = 1; j < size + 1; j++) {
      let a = i * j;
      newArr.push(a);
    }
    array.push(newArr);
  }
  return array;
}

console.log(multiplicationTable(3));

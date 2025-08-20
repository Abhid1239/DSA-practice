function countDigits(digits: number) {
  const strNumber: string = digits.toString();
  let totalCount = 0;
  for (let i = 0; i < strNumber.length; i++) {
    totalCount++;
  }

  return totalCount;
}

function countDigits2(digits: number) {
  return digits.toString().length;
}

function countDigits3(digits: number) {
  let numbers: number[] = [];
  while (digits > 0) {
    numbers.push(digits % 10);
    digits = Math.floor(digits / 10);
  }
  return numbers.length;
}

console.log(countDigits(12323434), 8);
console.log(countDigits2(12323434), 8);
console.log(countDigits3(12323434), 8);

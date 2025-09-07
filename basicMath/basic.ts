// GCD or HCF

// let n = 7;
// let m = 64;

function checkGCD(n, m) {
  for (let i = Math.min(n, m); i > 0; i--) {
    if (n % i == 0 && m % i == 0) {
      return i;
    }
  }
  return 1;
}

function checkGCD2(n, m) {
  while (n !== 0 && m !== 0) {
    if (n > m) {
      n = n - m;
    } else {
      m = m - n;
    }
  }
  return n == 0 ? m : n;
}
console.log(checkGCD(72, 96));
console.log(checkGCD(72, 98));
console.log(checkGCD2(72, 96));
console.log(checkGCD2(72, 98));
console.log(checkGCD(72, 99));
console.log(checkGCD2(72, 99));
console.log(checkGCD(72, 199));
console.log(checkGCD2(72, 199));
console.log(checkGCD(72, 279));
console.log(checkGCD2(72, 279));

function armStrong(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, n) => acc + Math.pow(parseInt(n), 3), 0) == num
    ? true
    : false;
}

console.log(armStrong(153));
console.log(armStrong(123));

function checkForPrime(n) {
  if (n == 1) return true;
  if (n == 2 || n == 3) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(checkForPrime(153), "prime");
console.log(checkForPrime(19), "rpimce");

function sumOfN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
function sumOfN2(n) {
  if (n <= 1) return 1;
  return n + sumOfN2(n - 1);
}

console.log(sumOfN(153), "sum of n");
console.log(sumOfN(19), "sum of n");
console.log(sumOfN(153), "sum of n");
console.log(sumOfN(19), "sum of n");

function factorial(n) {
  let m = 1;
  for (let i = 1; i <= n; i++) {
    m *= i;
  }
  return m;
}

function factorial2(n) {
  if (n <= 1) return 1;
  return n * factorial2(n - 1);
}

console.log(factorial2(19), "fact of n");
console.log(factorial2(9), "fact of n");
console.log(factorial(19), "fact of n");
console.log(factorial(9), "fact of n");

function reverseArray(n) {
  if (n.length == 0) return [];
  let el = n.pop();
  let out = reverseArray(n);
  console.log(el, out);
  return [el, ...out];
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function fibonacci(n) {
  if (n == 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  let out = fibonacci(n - 1);

  return [...out, out[out.length - 1] + out[out.length - 2]];
}

console.log(fibonacci(7));

function fibNumber(n) {
  if (n <= 0) return 0;
  if (n <= 1) return 1;

  return fibNumber(n - 1) + fibNumber(n - 2);
}

console.log(fibNumber(6));

const obj = {};
function fib(n) {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  if (obj[n]) return obj[n];
  let val = fib(n - 1) + fib(n - 2);
  obj[n] = val;
  console.log(val, "start");
  return val;
}
console.log(fib(6));

function reverse(x: number): number {
  if (x == 0) return 0;
  let num =
    parseInt(Math.abs(x).toString().split("").reverse().join("")) *
    (x / Math.abs(x));
  return Math.pow(2, 31) < num || Math.pow(2, 31) * -1 > num ? 0 : num;
}

function reverse2(x: number): number {
  let num: number[] = [];
  while (x !== 0) {
    num.push(x % 10);
    x = Math.floor(x / 10);
  }
  return num.reduce((acc, curr) => acc * curr + curr, 0) * (x / Math.abs(x));
}

console.log(reverse(123), 321);
console.log(reverse(-123), -321);
console.log(reverse(120), 21);
console.log(reverse(0), 0);

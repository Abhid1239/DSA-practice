function checkForPalindrome(palindrome: number) {
  let i = 0;
  const total = palindrome.toString.length - 1;

  while (i <= Math.floor(total / 2)) {
    if (palindrome[i] !== palindrome[total - i]) {
      return false;
    }
    i++;
  }
  return true;
}

function checkForPalindrome2(pal: number) {
  return pal === Number(pal.toString().split("").reverse().join(""));
}

console.log(checkForPalindrome(12321), true);
console.log(checkForPalindrome(123321), true);
console.log(checkForPalindrome(12345), false);
console.log(checkForPalindrome2(12321), true);
console.log(checkForPalindrome2(123321), true);

const checkLength = (string = '', maxSymbols = 1) => (string.length <= maxSymbols);

checkLength();

// ----------------------------------------------------------------------------------------

const isPalindrome = (string = '') => {

  string = string.replaceAll(' ','').toLowerCase();

  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }

  return string === reversed;
};

isPalindrome();

const verifyPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toUpperCase();
  const reverseString = normalizedString.split('').reverse().join('');
  return reverseString === normalizedString;
};

// verifyPalindrome();

console.log(verifyPalindrome("A man a plan a canal Panama")); // true
console.log(verifyPalindrome("Hello")); // false


// --------------------------------------------------------------------------------------

const extractNumbers = (string) => {
  let result = '';

  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }

  return result === '' ? NaN : Number(result);
};

// extractNumbers();

console.log(extractNumbers("abc123")); // 123
console.log(extractNumbers("no numbers")); // NaN
console.log(extractNumbers("3 cats and 4 dogs")); // 34

function stringToNumber(str) {
  return Number(
    [...str].filter((item) => !isNaN(parseInt(item, 10))).join('') || NaN
  );
}

// stringToNumber();

console.log(stringToNumber("abc123")); // 123
console.log(stringToNumber("no numbers")); // NaN
console.log(stringToNumber("3 cats and 4 dogs")); // 34

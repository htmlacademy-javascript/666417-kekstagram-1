//функция проверки является сливо палидроном
let str = 'abcdedcba';
str = str.toLowerCase();
function isPalindrome(text) {
  const strLength = text.length;
  for (let i = 0; i < strLength; i++) {
    if (text[0] === text[strLength - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
  return true;
}
isPalindrome(str);

//извлечение чисел от 0 до 9 из передаваемой строки

const strNumber = 'ECMAScript 2022';
function isNum(value) {
  const strLengthNum = value.length;
  let res = '';
  for (let i = 0; i < strLengthNum; i++) {
    if (!isNaN(value[i])) {
      res += value[i];
    }
  }
  return res;
}
isNum(strNumber);

//проверка длины строки

function chekStrLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
chekStrLength('qwertyui',6);

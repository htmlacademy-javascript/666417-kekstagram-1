//
const myPadStart = (string, minLength, addSymbol) => {
  let res = string;
  const tmpResLength = res.length + addSymbol.length;
  let actPad = '';
  while (res.length < minLength) {
    actPad = tmpResLength <= minLength ? addSymbol : addSymbol.slice(0, minLength - tmpResLength);
    res = actPad + res;
  }
  return res;
};
myPadStart('1', 2, '0');

//функция проверки является слово палидроном
const isPalindrome = (text) => {
  const tempText = text.toLowerCase().replaceAll(' ', '');
  let reverseText = '';
  for (let i = tempText.length - 1; i >= 0; i--) {
    reverseText += tempText.at(i);
  }
  return tempText === reverseText;
};
isPalindrome('');

//извлечение чисел от 0 до 9 из передаваемой строки
const getNumber = (value) => {
  let res = '';
  for (let i = 0; i < value.length; i++) {
    if (!Number.isNaN(parseInt(value.at(i), 10))) {
      res += value.at(i);
    }
  }
  return parseInt(res, 10);
};
getNumber('f32sda222');

//проверка длины строки
const chekStrLength = (string, maxLength) => string.length <= maxLength;
chekStrLength('dsad', 4);

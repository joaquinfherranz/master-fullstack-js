
const rotateCodes = (charCode, firstCharCode, lastCharCode, positions) => 
  firstCharCode +   
  ((charCode - firstCharCode+positions)%(lastCharCode-firstCharCode+1)) +
  (positions < 0
    ? lastCharCode-firstCharCode
    : 0);

const rotate = (char, firstChar, lastChar, positions) => 
  rotateCodes (char.charCodeAt(0), firstChar.charCodeAt(0), lastChar.charCodeAt(0), positions)

export const cesarEncode = ([...aText], positions=1) => 
  aText
    .map(char=>
      /[A-Z]/.test(char)
      ? rotate(char, 'A', 'Z', positions)
      : /[a-z]/.test(char)
        ? rotate(char, 'a', 'z', positions)
        : char.charCodeAt(0))
    .map(charCode=>String.fromCharCode(charCode))
    .join('');


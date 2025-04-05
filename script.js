function firstNonRepeatedChar(str) {
  const count = {};

  // First pass: count each character
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  // Second pass: return the first character with count 1
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

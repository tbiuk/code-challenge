module.exports = function encoder(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  if (/[^a-zA-Z]/.test(str)) {
    throw new Error("Input string must contain only alphabetic characters");
  }

  if (str === "") {
    return "";
  }

  const MAX_COUNT = 9;
  let result = "";

  let currentChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;

      if (count > MAX_COUNT) {
        result = result.concat(currentChar + MAX_COUNT);
        count -= MAX_COUNT;
      }

      continue;
    }

    result = result.concat(currentChar + count);
    currentChar = str[i];
    count = 1;
  }

  result = result.concat(currentChar + count);

  return result;
};

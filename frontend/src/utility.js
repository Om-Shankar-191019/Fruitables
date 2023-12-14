export function truncateString(inputNumber, inputString) {
  if (typeof inputNumber !== "number" || typeof inputString !== "string") {
    return;
  }

  if (inputNumber <= 0) {
    return;
  }

  if (inputString.length <= inputNumber) {
    return inputString;
  }

  const truncatedString = inputString.substring(0, inputNumber).trim();
  return `${truncatedString}...`;
}

// Example usage:

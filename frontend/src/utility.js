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

// export const eitherZeroOrOne = () => {
//   return Math.floor(Math.random() * 2);
// };

// export const getRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// export const exaggeratedPrice = (price, offPercentage) => {
//   const exaggerated = Math.floor((offPercentage * price) / 100) + price;
//   return exaggerated;
// };

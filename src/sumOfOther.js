module.exports = function sumOfOther(arr) {
  const arrSum = arr.reduce((a, b) => (a + b), 0);
  return arr.map(elem => arrSum - elem);
};

module.exports = function recursion(tree) {
  const result = [];
  const arr = [];
  for (const prop in tree) {
    const value = tree[prop];
    if (typeof value === 'object') {
      arr.push(recursion(value));
    } else {
      arr.push(value);
    }
  }
  return result.concat(...arr);
};

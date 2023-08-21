module.exports = function reverse (n) {
  let num = String(n);
  let i = num.length;
  let result = '';

  while (i > 0) {
    result = result + num[i - 1];
    i = i - 1;
  }
  return parseInt(result);
}
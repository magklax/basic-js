const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const newArr = [];
  let index;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        index = i + 1;
        i++;
        break;
      case "--discard-prev":
        if (arr.length && i - 1 != index) {
          newArr.pop();
        }
        break;
      case "--double-next":
        if (i + 1 < arr.length) {
          newArr.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (newArr.length && i - 1 != index) {
          newArr.push(newArr[newArr.length - 1]);
        }
        break;
      default:
        newArr.push(arr[i]);
    }
  }
  return newArr;
}

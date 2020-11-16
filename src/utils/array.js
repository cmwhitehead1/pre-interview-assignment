const arrayUtils = {
  flatten(arr) {
    return arr.reduce((acc, curVal) => acc.concat(curVal), []);
  },
  spliceArray(arr, spliceCount) {
    const newArr = [];
    while (arr.length) {
      newArr.push(arr.splice(0, spliceCount));
    }
    return newArr;
  },
};

export default arrayUtils;

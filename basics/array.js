Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(
      "Array.prototype.myMap called with non-function callback",
    );
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // 跳过空槽
    if (i in this) {
      result.push(callback.call(thisArg, this[i], i, this));
    }
  }
  return result;
};

Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myFilter called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(
      "Array.prototype.myFilter called with non-function callback",
    );
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const element = this[i];
      if (callback.call(thisArg, element, i, this)) {
        result.push(element);
      }
    }
  }
  return result;
};

console.log([1, , 3].myFilter((x) => x > 2)); // [3]

Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(
      "Array.prototype.myReduce called with non-function callback",
    );
  }

  const accumalator = initialValue;
  const startIndex = 0;

  //deal with no initialValue given, need to find the first valid value
  if (accumaltor == undefined) {
    while (startIndex < this.length && !(startIndex in this)) {
      startIndex++;
    }
    if (startIndex >= this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    accumalator = this[startIndex];
    startIndex++;
  }

  for (let i = startIndex; i < this.length; i++) {
    //skip the empty element
    if (!(i in this)) continue;
    accumalator = callback(accumalator, this[i], i, this);
  }

  return accumalator;
};

Array.prototype.mySort = function (compareFn) {
  if (this == null) {
    throw new TypeError("Array.prototype.mySort called on null or undefined");
  }

  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("compareFn must be a function or undefined");
  }

  const arr = Object(this);

  compareFn =
    compareFn ||
    function (a, b) {
      const A = String(a);
      const B = String(b);

      if (A > B) return 1;
      if (A < B) return -1;

      return 0;
    };

  for (let i = 0; i < arr.length - 1; i++) {
    let ifSwapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (compareFn(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        ifSwapped = true;
      }
    }
    if (!ifSwapped) break;
  }

  return arr;
};
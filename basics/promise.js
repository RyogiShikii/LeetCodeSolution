class myPromise {
  constructor(excutor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;

    //promise could be async, store callbacks
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      //state can only change once
      if (this.state === "pending") {
        this.state = "fulfilled";

        this.value = value;

        //excute the list of all fulfilled callbacks
        this.onFulfilledCallbacks.forEach((Fn) => Fn());
      }
    };

    const reject = (reason) => {
      //same above, the state can only change once
      if (this.state === "pending") {
        this.state = "rejected";

        this.reason = reason;

        this.onRejectedCallbacks.forEach((Fn) => Fn());
      }
    };

    try {
      excutor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    //if onFulfilled not a function, pass the value directly
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;

    //if onRejected not a function, pass error forward
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    //then should return a Promise, original Promise can do Promise.then().then()...
    const promise2 = new myPromise((resolve, reject) => {
      //if the CURRENT Promise has succeeded
      if (this.state === "fulfilled") {
        //
        queueMicrotask(() => {
          try {
            const x = onFulfilled(this.value);

            resolve(x);
          } catch (error) {
            reject(error);
          }
        });
      }

      if (this.state === "rejected") {
        //
        queueMicrotask(() => {
          try {
            const x = onRejected(this.reason);

            resolve(x);
          } catch (error) {
            reject(error);
          }
        });
      }

      //if CURRENT Promis is still pending, store the then callback into onFulfilledCallbacks or onRejectedCallbacks list
      if (this.state === "pending") {
        //
        this.onFulfilledCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onFulfilled(this.value);
              resolve(x);
            } catch (error) {
              reject(error);
            }
          });
        });

        this.onRejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onRejected(this.reason);
              resolve(x);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    });

    return promise2;
  }
}

//all resolved => resolve; any reject => reject; keep the order, return array
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    //create results array to store all promises result
    const results = [];
    let completed = 0;

    //if promises have no promise
    if (promises.length === 0) {
      resolve(results);
    }

    //loop promises
    promises.forEach((promise, index) => {
      //call Promise.resolve().then() to store in results
      //index is important cause input order is not equal to the somplete order
      Promise.resolve(promise)
        .then((res) => {
          results[index] = res;

          completed++;

          //when all promises are completed, then resolve result
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

//Promise.any: once a promise resolved => resolve immediately. if all reject => reject(AggregateError)
Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let rejectCount = 0;

    if (promises.length === 0) {
      reject(new AggregateError([], "all promises were rejected"));
    }

    //loop promises
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          errors[index] = error;

          rejectCount++;

          if (rejectCount === promises.length) {
            reject(new AggregateError(errors, "all promises were rejected"));
          }
        });
    });
  });
};

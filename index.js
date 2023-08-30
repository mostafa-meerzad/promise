const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("succeed");
    // reject(new Error("failed to resolve!"))
  }, 2000);
});

myPromise
  .then((res) => {
    // console.log("myPromise says: ", res);
    return res;
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("something went wrong: ", err));

const resolvedPromise = Promise.resolve("already resolved"); // creates a promise that is already resolved
const rejectedPromise = Promise.reject("something went wrong in the rejectedPromise"); // creates a promise that is already rejected

resolvedPromise.then((res) => console.log(res));
rejectedPromise.catch((err) => console.log("the error ",err))

const promise1 = new Promise((resolve, reject) => {
    console.log("calling the promise 1")
    setTimeout(() => {
        resolve(1)
    }, 3000);
})
const promise2 = new Promise((resolve, reject) => {
    console.log("calling the promise 2")
    setTimeout(() => {
        resolve(2)
    }, 2000);
})

// Promise.all([promise1, promise2]).then(res=>console.log(res, " from Promise.all")).catch(err=>console.log(err))

Promise.race([promise1, promise2]).then(res => {console.log("the result from Promise.race: ", res)})
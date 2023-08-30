# Javascript Promise

A promise is an object that holds the eventual result of an asynchronous operation.

A promise is on one of these three states

- pending
- resolved
- rejected

## Pending

pending is the initial state of a promise when gets called.

## Resolved

resolved is the state when the promise succeed performing the async operation.

## Rejected

rejected is the state when the promise failed performing the async operation.

## Create a Promise

use `new Promise()` to create a new promise object, this object takes one argument which is a callback function with two parameters, call **resolve** if the async operation is completed otherwise call **reject** which means the operation failed

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("succeed");
    reject(new Error("failed to resolve!"));
  }, 2000);
});

myPromise
  .then((res) => {
    console.log("myPromise says: ", res);
  })
  .catch((err) => console.log("something went wrong: ", err));
```

The **then** method returns a new **Promise** , which allows for method chaining. If the function passed as handler to **then** returns a Promise , an equivalent Promise will be exposed to the subsequent then in the method chain.
if the callback returns a value **then** returns a promise so you can access that value using another **then**

## Settled Promises

the Promise object provides settled promises that is useful for testing purposes

```js
const resolvedPromise = Promise.resolve("optional data if needed");

resolvedPromise.then((data) => {
  // do something with the data
});
```

```js
const resolvedPromise = Promise.reject("optional rejection-data if needed");

resolvedPromise.then((data) => {
  // do something with the data
});
```

## Parallel Promises

### all

`Promise.all` takes an array of promises resolves if all given promises resolve, resolves with the resolve value of all promises, rejects if any of the give promises reject.

useful for having multiple async operations that all of them needs to be done before you can go any farther

```js
const promise1 = new Promise((resolve, reject) => {
  console.log("calling the promise 1");
  setTimeout(() => {
    resolve(1);
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  console.log("calling the promise 2");
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

Promise.all([promise1, promise2])
  .then((res) => console.log(res, " from Promise.all"))
  .catch((err) => console.log(err));
```

## race

`Promise.race` the Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects,

```js
const promise1 = new Promise((resolve, reject) => {
  console.log("calling the promise 1");
  setTimeout(() => {
    resolve(1);
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  console.log("calling the promise 2");
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

Promise.race([promise1, promise2]).then((res) => {
  console.log("the result from Promise.race: ", res);
});
```

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
const rejectedPromise = Promise.reject(
  "something went wrong in the rejectedPromise"
); // creates a promise that is already rejected

resolvedPromise.then((res) => console.log(res));
rejectedPromise.catch((err) => console.log("the error ", err));

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

// Promise.all([promise1, promise2]).then(res=>console.log(res, " from Promise.all")).catch(err=>console.log(err))

Promise.race([promise1, promise2]).then((res) => {
  console.log("the result from Promise.race: ", res);
});

function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log("getting the user...");
    setTimeout(() => {
      resolve({ name: "mostafa", id });
    });
  }, 2000);
}

function getRepos(user) {
  return new Promise((resolve, reject) => {
    console.log("getting user repos...");
    setTimeout(() => {
      resolve(["repo 1", "repo 2", "repo 3"]);
    }, 2000);
  });
}
function getComments(repo) {
  return new Promise((resolve, reject) => {
    console.log("getting comments...");
    setTimeout(() => {
      resolve(["comment 1", "comment 2", "comment 3"]);
    }, 2000);
  });
}
getUser(12)
  .then((user) => {
    console.log(user);
    // console.log(`getting ${user?.name} repos...` )
    return getRepos(user);
  })
  .then((repos) => {
    console.log(repos, " in the chained promises");
    return getComments(repos);
  })
  .then((comment) => {
    console.log(comment);
  })
  .catch((err) => console.log(err));

async function readUser() {
  try {
    const user = await getUser(12);
    const repos = await getRepos(user);
    const comments = await getComments(repos);
  } catch (err) {
    console.log("something went wrong ", err);
  }
}

// console.log("anc");

function func() {
  let a = 9;
  return () => {
    return a;
  };
}

function printA() {
  return this.a;
}
const newFunc = printA.bind({ a: 11 });

// console.log(newFunc());

// setTimeout(() => console.log(newFunc()), 2000);

// let myPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("done");
//   }, 3000);
// });

// myPromise.then((result) => console.log(result));

// setInterval(() => {
//   console.log(myPromise);
// }, 1000);

## How to make child component for React Suspense which waits for data

The Suspense expects any async child to throw a promise.then.
Once this promise resolves/rejects Suspense will recall the child component an render the component.

```JSX
const data = new Promise((resolve) => {
  setTimeout(() => {
    resolve("resolved");
  }, 3000);
});

let resultData;
let firstRender = { value: true };
let completed = false;

const PokeBanner = ({ pokemon = 6 }) => {
  const mySlowFunction = () => {
    if (firstRender.value) {
      firstRender.value = false;
      throw data.then((result) => {
        resultData = result;
        completed = true;
      });
    } else {
      if (completed) {
        return resultData;
      }
    }
  };

  const getData = mySlowFunction();

  return <div>{getData}</div>;
};
```

If the above component is wrapped in Suspese the following steps will happen.

1. Child component runs and the mySlowFunction() executes and as it is a first render it throws the promise with then. Suspense will stop executing rest of the code and show fallback content.
2. When the Promise resolves, Suspense runs the child component again but now te getData has the data in resolve, and the rest of the flow follows

ToNote: We have to make use the promise is created once, if it gets created inside component, the promise will create again when the prev promise resolves and the component will fall into an endless loop.

Once a promise starts with some async work it js will keep track of the state of promise in the same promise object, this helps us achieve the above concept.

```JSX
let myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("done");
  }, 3000);
});

myPromise.then((result) => console.log(result));

setInterval(() => {
  console.log(myPromise);
}, 1000);

// Output ---
// Promise {<pending>}
// Promise {<pending>}
// Promise {<fulfilled>: 'done'}
```

## Dynamic classname in tailwind

We cannot use dynamic class as such in tailwind.

```JSX
bg-${pokemonTheme}
```

This because when Tailwind compiles its CSS, it looks up over all of your code and checks if a class name matches.

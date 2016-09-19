# Promises

If you don't know what promises are, they can be quickly explained by thinking
of them as an alternative to callbacks. Promises are meant to handle asynchronous
control flow, in a way that many people feel is more elegant than simply using
callback functions.

Promises have been around for a while in various implementations but were never truly
built into the language before ES6.


```javascript
const p1 = new Promise(
  function(resolve, reject) {
    setTimeout(function() {
      resolve('promise is done!')
    }, 100);
  }
);

// Promise { <pending> }

p1.then(function(data) {
  console.log(data);
}).catch(function(err) {
  console.error(err);
});

// the promise will resolve after 100 milliseconds
//  -> "promise is done!""
```


## Additional Features.

Promises can be chained and combined in the version delivered with ES6.

```javascript

const waitFor = (n) => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(`Promise from wait for ${n} ms`);
    }, n);
  });
}

Promise.all([
  waitFor(100),
  waitFor(200),
  waitFor(300)
]).then((data) => {
  let [res1, res2, res3] = data;
  console.log(res1);
  console.log(res2);
  console.log(res3);
}, (err) => {
  console.error(err);
});

// Promise from wait for 100 ms
// Promise from wait for 200 ms
// Promise from wait for 300 ms

```

# Default parameters

```javascript

function myDefaults(a, b = 'World', c = '!' ) {
  console.log([a,b,c].join(' '));
}

myDefaults('Hello');

// Prints:  "Hello World !"

```

Call a function in a default param


```javascript

function inlineCallParam(test = Math.random()) {
  if(test > 0.5) {
    return 'Win!';
  }
  return 'Lose!';
}

console.log('You ' + inlineCallParam());

// may print: "You Win!"

```


Define a function inline as a default param

```javascript

function operateOnArray(arr, sumFn = (a, b) => { return a + b; }) {
  return arr.reduce(sumFn);
}

// by default, this will sum the array
operateOnArray([1,2,3,4]);  
// -> 10


// well, we can also pass in a reduce function that will multiply.
operateOnArray([1,2,3,4], (a,b) => { return a * b; });
// -> 24

```

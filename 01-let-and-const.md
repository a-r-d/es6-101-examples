# Block Scope with Let and Const

Use let and const to declare variables over var.

```javascript

let x = "Hello";
const y = "world!";

```

Use const for variables that cannot be reassigned

```javascript

const perm = "permanent record";

// what happens when you try this:
perm = "something else";

```


let and const are block scoped.

```javascript

if(true) {
  let x = "some value";
}

// var would have been hoisted, but what happens when we do this:
console.log(x);

```

Use let for loop iterators now:

```javascript

// use var in a loop, see what happens
const refsVar = [];
for(var i = 0; i < 3; i++) {
  refsVar.push(function() {
    return i;
  });
}

// what do you get when you map over these functions?
console.log(refsVar.map((func) => {
  return func();
}));


// use let in a loop, see what happens compared to above
const refsLet = [];
for(let j = 0; j < 3; j++) {
  refsLet.push(function() {
    return j;
  });
}

// what do you get when you map over these functions?
console.log(refsLet.map((func) => {
  return func();
}));


```

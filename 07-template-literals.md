# Template Literals

```javascript
const [x, y, z] = ['var 1', 'var 2', 'var 3'];

const interpolation = `
    1. ${x}
    2. ${y}
    3. ${z}
`;

console.log(interpolation);
/**
  Looks like this, preserves formatting:

    1. var 1
    2. var 2
    3. var 3

**/
```

Evaluate expressions

```javascript

const random = () => {
  return Math.floor(Math.random() * 100);
}

console.log(`My lucky number is ${random()}`);
// "My lucky number is 75"

```

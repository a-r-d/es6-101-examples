# New Methods

## Awesome new String methods

```javascript

const name = "always be coding";

console.log(name.startsWith('always'));  // true
console.log(name.endsWith('coding'));    // true
console.log(name.includes('be'));        // true

console.log(name.repeat(3));
// 'always be codingalways be codingalways be coding'

```

## Object.assign()

```javascript
const person = {
  name: 'Elon Musk',
  occupation: 'CEO'
};

///   arguments => target object, original object, new keys/values
const otherPerson = Object.assign({}, person, {
  occupation: 'Entrepenuer',
  age: 49
});

console.log(otherPerson);
// { name: 'Elon Musk', occupation: 'Entrepenuer', age: 49 }

```

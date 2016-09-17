# Object Property Shorthands.

```javascript

const person = {
  name: 'Elon Musk',
  jobTitle: 'CEO',
  favoriteThing: 'Rockets'
}

// destructure out these keys
let { jobTitle, favoriteThing } = person;

// Jeff bezos also happens to own a rocket company, so let's reuse those.
const anotherPerson = {
  name: 'Jeff Bezos',
  jobTitle,                 // <--- the key is the variable name, no need to write twice!
  favoriteThing
}

console.log(anotherPerson);
// { name: 'Jeff Bezos', jobTitle: 'CEO', favoriteThing: 'Rockets' }

```

# Arrow functions

Arrow functions always use the "this" context in which they were created.

```javascript

function Animal(params) {
  this.type = params.type;
  this.voice = params.voice;

  setTimeout(function() {
    console.log(`This classic function: the ${this.type} says ${this.voice}`);
  }, 5)

  setTimeout(() => {
    console.log(`This arrow function: the ${this.type} says ${this.voice}`);
  }, 10)

}

// What happens when you instantiate this ?
// What happens when the arrow function runs ?
const duck = new Animal({
  type: 'duck',
  voice: 'quack'
});

```

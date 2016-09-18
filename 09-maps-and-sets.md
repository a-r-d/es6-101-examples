# Maps and Sets

## Maps

Not too different from plain objects, but iterating works better, and you can use objects as keys

```javascript
const map = new Map();

// maps are now supported, and you can use objects as keys
map.set('pikachu', {weight: '10 kg', height: '50 cm'});
map.set('charmander', {weight: '15 kg', height: '110 cm'});
map.set('zubat', {weight: '5 kg', height: '60 cm'});

// get by key:
console.log(map.get('zubat')); //  {weight: '5 kg', height: '60 cm'}

// iterate over the map
for (let [key, value] of map) {
  console.log(`${key}=>${value}`);
}
```

## Sets

```javascript

const aSet = new Set();

aSet.add('Benjamin Franklin');
aSet.add('John Adams');
aSet.add('Abraham Lincoln');

console.log(aSet.has('John Adams')); // true
for (let n of aSet) {
  console.log(n);
}

console.log(aSet.size); // 3
aSet.add('John Adams');
console.log(aSet.size); // 3 => the number did not change.

```

## Sets and Arrays

```javascript

var myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
var mySet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread operator to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray

```

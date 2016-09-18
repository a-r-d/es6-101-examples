# Classes

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get coords() {
    return this.coordinatePair();
  }

  coordinatePair() {
    return [this.x, this.y];
  }

  static calculateSlope(p1, p2) {
    return (p2.y - p1.y) / (p2.x - p1.x);
  }
}

const p1 = new Point(1, 1);
const p2 = new Point(5, 2);
console.log('p1: ' + p1.coords);  // p1: 1,1
console.log('p2: ' + p2.coords);  // p2: 5,2
console.log(Point.calculateSlope(p1, p2));  // 0.25
```

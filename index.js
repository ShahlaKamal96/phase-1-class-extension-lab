// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        return this.sides.reduce((a, b) => a + b);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides !== 3) return false;
        const [a, b, c] = this.sides.sort((a, b) => a - b);
        return a + b > c;
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides !== 4) return false;
        const [a, b, c, d] = this.sides;
        return a === b && b === c && c === d;
    }
    get area() {
        return this.sides[0] * this.sides[0];
    }
}

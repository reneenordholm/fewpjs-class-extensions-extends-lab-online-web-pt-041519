class Polygon {
  constructor(array){
    this.sides = array
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((a,b) => a + b, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    let maxNum = Math.max.apply(null, this.sides)
    let sideOne = this.sides[0]
    let sideTwo = this.sides[1]
    let sideThree = this.sides[2]

    if( (this.countSides === 3) &&
      (sideOne + sideTwo > maxNum) &&
      (sideTwo + sideThree > maxNum) &&
      (sideThree + sideOne > maxNum)) {
        return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    return this.sides.every( side => side === this.sides[0] )
  }

  get area() {
    return this.sides[0] * this.sides[1]
  }
}

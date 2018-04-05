import vec from '../tools/vector.js'
export class position {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  get () {
    return {
      x: this.x,
      y: this.y
    }
  }

  add (x, y) {
    this.x +=x
    this.y +=y
  }
  addVector(vec){
    this.x += vec.x
    this.y += vec.y
  }
}

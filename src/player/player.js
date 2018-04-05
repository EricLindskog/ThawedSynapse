import dude from '../objects/dude.js'
export class player{

  constructor(colour,name){
    this.colour = colour
    this.dudes = []
  }

  getColor(){
    return this.colour
  }
}

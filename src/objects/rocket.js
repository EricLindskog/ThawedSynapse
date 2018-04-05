import pos from '../tools/position.js'
import vec from '../tools/vector.js'
export class rocket{

  //var pos = new pos(0,0)
  //var vec = new vec(0,0)

  constructor(pos,vec){
    this.pos = pos //this is still pretty uncivilized but the vector and position class are almost identical
    this.vec = vec
    this.baseSpeed = 4
    this.range = 300
  }
  //This should eventually do something
  explode(){

  }

}

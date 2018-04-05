import pos from '../tools/position.js'
import vec from '../tools/vector.js'
import player from '../player/player.js'
//import Matter from 'matter'
export class dude{


  constructor(pos,id,owner,weapon){
    this.pos = pos //We treat this pos as a vector as it won't matter
    this.owner = owner
    this.colour = owner.getColor
    this.maxHealth = 100
    this.weapon = weapon
    this.size = 20
  }


  draw (ctx){
    ctx.fillStyle = this.colour
    ctx.beginPath()
    ctx.arc(this.pos.x,this.pos.y,this.size,0,2*Math.PI)
    ctx.fill()
  }

  //Please only send a weapon, thanks :)
  setWeapon(weapon){
    this.weapon = weapon
  }
  getWeapon(){
    return this.weapon
  }
}

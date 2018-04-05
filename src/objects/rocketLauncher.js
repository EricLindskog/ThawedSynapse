import pos from '../tools/position.js'
import vec from '../tools/vector.js'
import Matter from 'matter'
export class rocketLauncher{


  constructor(pos,vec){
    this.damage
    this.id

    this.pos = pos
    this.vec = vec
    this.ammo = 10
    this.length = 30
    this.width = 10
  }


  draw (ctx){

  }
  fire (){

  }
  addAmmo(add){
    this.ammo += add
  }

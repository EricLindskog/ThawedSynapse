import pos from './position'

export class rectangle{
  var p1 = new pos(0,0)
  var p2 = new pos(0,0)
  var p3 = new pos(0,0)
  var p4 = new pos(0,0)
  constructor(p1,p2,p3,p4){
    this.p1.addVector(p1)
    this.p2.addVector(p2)
    this.p3.addVector(p3)
    this.p4.addVector(p4)
  }

  overlapRect(rectangle){
    
  }
  overlapCircle(circle){

  }
}

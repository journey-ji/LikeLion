function Factory(foods) {
 // 로봇객체를 찍어냄
 //로봇인스턴스는 음식이름의 배열을 전달받으면 랜덤하게 뽑아냄
 this.foods = foods
 
}
Factory.prototype.get_food = function() {
  console.log(this.foods[parseInt(Math.random()*this.foods.length)])
 }
let robot1 = new Factory(['pizza','hotdog','juice','pasta'])
let robot2 = new Factory(['피자','핫도그','주스','파스타'])
console.log(robot1.__proto__.get_food === robot2.__proto__.get_food)
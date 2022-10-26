class 소세지 {
  constructor(재료1,재료2){
    this.재료1 = 재료1
    this.재료2 = 재료2
  }
  taste(){
    console.log(this.재료1+'와 '+this.재료2+'맛이 난다.')
  }
}

class 불소세지 extends 소세지 {
  constructor(재료1,재료2){
    super(재료1,재료2)
  }
  tasteOwn(){
    this.taste()
    console.log('불맛이 쩐다')
  }

}
const temp = new 소세지('파','소고기')
const temp2 = new 불소세지('파','소고기')
temp.taste()
temp2.tasteOwn()
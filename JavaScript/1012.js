let book = {
  책이름:'a',
  책가격:1000,
  저자:'홍길동',
  출판일:'22-10-11',
}


let newBook = {}
newBook['책가격'] = 100000
newBook['저자'] = ' 창언 창언 창언'
newBook['출판일'] = '22-10-12'

function Book(책이름,책가격,저자,출판일){
  this.책이름 = 책이름
  this.책가격 = 책가격
  this.저자 = 저자
  this.출판일 = 출판일
}

let data = new Book('자스',10,'창언','22-12-10')


function Book2(책이름,책가격,저자,출판일){
  temp = {}
  temp.책이름 = 책이름
  temp.책가격 = 책가격
  temp.저자 = 저자
  temp.출판일 = 출판일
  return temp;
}

let data2 = Book2('자스',10,'창언','22-12-10')

// 위 new Book과 Book2 의 선언이 동일하게 작동한다.



// 콜백함수 알아보기

function sum(x,y, callback){
  callback(x+y)
  return x+y
}


//sum (10,20,console.log)



function 제곱(아규){
  return 아규**2
}
let arr = [10,20,30,40,50]
arr = arr.map(제곱)


let arr2 = [10,20,30,40,50]
arr2 = arr2.map(x=>x**2)


function doubled(x){
  console.log(x*2)
}

let arr3 = [1,2,3,4,5]
// arr3.forEach(doubled)


let arr4 = [10,20,30,40,50]
//console.log(arr4)
let result = []
arr4.forEach(val=>result.push(val**2))
//console.log(result)


//forEach는 익스플로러 호환 주의


// Map 알아보기

let m = new Map();
let test = [1,2]
m.set('하나',1)
  .set('둘',2)
  .set('셋',3)
  .set('넷',4)
  .set(true,'참')
  .set(test,'really?')

// console.log(m)
// console.log(m.get('하나'))
// console.log(m.get(true))
// console.log(m.get(test))


// // Map에 키값이 있는지 확인하기
// console.log(m.has('하나'))
// console.log(m.has('열'))

// map 에 키값을 제거하기
//m.delete('하나')
// console.log(m)
// map 의 크기 구하기
m.size


let data3 = new Map([['one',1]],['two',2])

// for(const [i,j] of m){
//   console.log(i, j)
// }



// Map to Object로 변환하기
let newOb = Object.fromEntries(m)
// Object to Map로 변환하기
let newMp = new Map(Object.entries(newOb))




// 
// Set 알아보기
// set 은 중복을 허용하지 않는다.

let s = new Set('hellooooo')
let 회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근']
//console.log(new Set(회사게시판).size)

//console.log(new Set(회사게시판).size)


// 문제 2 각각 몇개의 게시물을 작성하였나 ?
// 풀이 1
for(let x of new Set(회사게시판)){
  //console.log(x, 회사게시판.filter(ele=>ele===x).length)
}

// 풀이 2
let map = new Map();
for(const i of 회사게시판){
  map.set(i,(map.get(i) || 0 ) + 1 )
}
//console.log(map)


// Set 자료형 순환하기

let ss = new Set('abcdeeeeeee'.split(''))
//console.log(ss)





// This ???
function a() {
  console.log(this)
}
//a()

let test1 =  {
  one:1,
  two:2,
  three:function(){
    console.log(this)
  }
}

//test1.three
function sayName(){
  console.log(this.name)
}

let peter = {
  name:"Peter Parker",
  sayName: function(s){
    console.log(this.name + s);
  }
}
let bruce = {
  name:"bruce Wayne",
}
peter.sayName.call(bruce,'!')

let hotel = [
  {
    'name':'hana hotel1',
    'the number of rooms':50,
    'reserved':25,
    'the number of rests': function(){return this["the number of rooms"]-this['reserved']}
  },
  {
    'name':'hana hotel2',
    'the number of rooms':40,
    'reserved':25,
    'the number of rests': function(){return this["the number of rooms"]-this['reserved']}
  },
  {
    'name':'hana hotel3',
    'the number of rooms':30,
    'reserved':25,
    'the number of rests': function(){return this["the number of rooms"]-this['reserved']}
  },
  {
    'name':'hana hotel4',
    'the number of rooms':25,
    'reserved':25,
    'the number of rests': function(){return this["the number of rooms"]-this['reserved']}
  }
]



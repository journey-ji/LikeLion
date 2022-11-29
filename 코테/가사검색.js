class 노드 {
  constructor(){
      this.children = {}
      this.count = 0
  }
}

class 트라이 {
  constructor(){
      this.root = new 노드()
  }

  insertData(word){
      let current = this.root
      current.count += 1
      for (const s of word) {
          let child = current.children[s]

          if(!child) {
              child = new 노드()
              current.children[s] = child
          }

          child.count += 1
          current = child
      }
  }

  search(query){
      let current = this.root
      for (const q of query) {
          if(q === '?') {
              return current.count
          } else if (!current.children[q]){
              return 0;
          }
          current = current.children[q]
      }
  }
}

function solution(words, queries){
  answer = []
  
  const 트라이배열 = Array(11)
  const 트라이역배열 = Array(11)

  for (const word of words) {
      const 단어길이 = word.length
      const 트라이1 = 트라이배열[단어길이] ? 트라이배열[단어길이] : new 트라이()
      const 트라이2 = 트라이역배열[단어길이] ? 트라이역배열[단어길이] : new 트라이()
      트라이1.insertData(word)
      트라이2.insertData([...word].reverse().join(''))
      트라이배열[단어길이] = 트라이1
      트라이역배열[단어길이] = 트라이2
  }

  // console.log(트라이배열)
  // console.log(트라이역배열)

  for (const query of queries) {
      if (!트라이배열[query.length]){
          answer.push(0)
          continue
      }

      let count

      if(query[0] !== '?'){
          count = 트라이배열[query.length].search(query)
      } else {
          count = 트라이역배열[query.length].search([...query].reverse().join(''))
      }
      answer.push(count)
  }

  return answer
}
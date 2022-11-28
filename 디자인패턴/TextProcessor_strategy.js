// 입력한 텍스트를 HTML문법으로 표현합니다.
// 입력한 텍스트를 마크다운 문법으로 표현합니다.



const outputFormat = {
  markdown: 0,
  html: 1,
}

// 추상클래스
// 하이레벨 : 모든 로우레벨이 동일하게 상속받는 동작을 정의(only)
class ListStrategy {
  start(data){}
  end(data){}
  addListItem(data,item){}
}

class HtmlListStrategy extends ListStrategy {
  start(data) {
    data.push('<ul>');
  }
  end(data) {
    data.push('</ul>');
  }
  addListItem(data, item) {
    data.push(`<li>${item}</li>`)
  }
}

class MarkdownListStrategy extends ListStrategy {
  addListItem(data,item){
    data.push(` * ${item}`)
  }
}

class TextProcessor {
  constructor(outputFormat) {
      this.data = [];
      this.setOutputFormat(outputFormat)
  }
  setOutputFormat(format){
    switch(format){
      case outputFormat.markdown:
        this.listStrategy = new MarkdownListStrategy()
        break;
      case outputFormat.html:
        this.listStrategy = new HtmlListStrategy()
        break;
        
    
    }
  }
  // 시작태그를 생성합니다.
  start(data) {
      data.push('<ul>');
  }

  // 종료태그를 생성합니다.
  end(data) {
      data.push('</ul>');
  }

  // 리스트 아이템을 생성합니다.
  addListItem(data, item) {
      data.push(`<li>${item}</li>`)
  }

  // 입력한 값을 데이터에 저장합니다.
  appendList(items) {
      this.start(this.data);

      for (let item of items) {
          this.addListItem(this.data, item);
      }

      this.end(this.data);
  }

  // 데이터 초기화
  clear() {
      this.data = [];
  }

  // 저장된 데이터를 콘솔로 출력합니다.
  showData() {
      console.log(this.data.join('\n'));
  }

}

const myTp = new TextProcessor();

myTp.appendList(['hello', 'JS', 'World']);
myTp.showData();

myTp.clear();
myTp.appendList(['hello', 'HTML', 'World']);
myTp.showData();

const { it } = require("node:test")

describe('클릭이벤트 및 뷰를 담당하는 클래스입니다.',()=>{
  it('viewManager의 인자로 textManager의 인스턴스가 전달되는지 확인합니다.',()=>{
    const textManager = null
    const btnEl = document.createElement('button')
    const viewerEl = document.createElement('h2')
    const inpTxt = document.createElement('input')

    const actual = ()=> new ViewManager(textManager,{btnEl, viewerEl, inpTxt})

    expect(actual).toThrowError()



  })
  it('viewManager의 인자로 HTML요소들이 잘 하는지 확인합니다.',()=>{
    const textManager = new TextManager();
    const btnEl = null
    const viewerEl = null
    const inpTxt = null
    const actual = ()=>new ViewManager(textManager,{btnEl,viewerEl,inpTxt})
    expect(actual).toThrowError()
  })
  

  const textManager = new TextManager(),
  btnEl = document.createElement('button'),
  viewerEl = document.createElement('h2'),
  inpTxt = document.createElement('input'),
  viewManager = new ViewManager(textManager,{btnEl,viewerEl,inpTxt})

  it('click 이벤트가 발생했을 경우',()=>{
    spyOn(viewManager,'changeValue')
    btnEl.click();

    expect(viewManager.changeValue).toHaveBeenCalled()
  })
})
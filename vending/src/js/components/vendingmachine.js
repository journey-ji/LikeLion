class Vendingmachine {
  constructor() {
      const vMachine = document.querySelector('.vending-machine');
      this.balance = vMachine.querySelector('.txt-balance');
      this.itemList = vMachine.querySelector('.list-item');
      this.inputCostEl = vMachine.querySelector('.inp-put');
      this.btnPut = vMachine.querySelector('.btn-put');
      this.btnReturn = vMachine.querySelector('.btn-return');
      this.btnGet = vMachine.querySelector('.btn-get');
      this.stagedList = vMachine.querySelector('.list-item-staged');

      const myinfo = document.querySelector('.my-info');
      this.myMoney = myinfo.querySelector('.txt-mymoney');
      this.gotList = myinfo.querySelector('.list-item-staged');
      this.txtTotal = myinfo.querySelector('.txt-total');
  }
  setup() {
      this.bindEvents();
  }
  stagedItemGenerator(target){
    const stagedItem = document.createElement('li')
    stagedItem.dataset.item = target.dataset.item
  }
  bindEvents() {
      /*
       * 1. 입금 버튼 기능
       * 입금액을 입력하고 입금 버튼을 누르면 소지금 == 소지금 - 입금액, 잔액 == 기존 잔액 + 입금액이 됩니다.
       * 입금액이 소지금 보다 많다면 실행을 중단하고 "소지금이 부족합니다." 라고 쓰인 경고창을 띄웁니다.
       * 입금액 인풋창은 초기화됩니다.
       * */

      this.btnPut.addEventListener('click', (event) => {
          const inputCost = parseInt(this.inputCostEl.value);
          const myMoneyVal = parseInt(this.myMoney.textContent.replace(/[^0-9]/g, ''));
          const balanceVal = parseInt(this.balance.textContent.replace(/[^0-9]/g, ''));

          if (inputCost) {
              // 입금액이 소지금보다 적다면 
              if (inputCost <= myMoneyVal) {
                  this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';
                  this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + '원';
              } else {
                  alert("소지금이 부족합니다.");
              }
              this.inputCostEl.value = null;
          }
      })
      this.btnReturn.addEventListener('click',(event)=>{
        const myMoneyVal = parseInt(this.myMoney.textContent.replace(/[^0-9]/g, ''));
        const balanceVal = parseInt(this.balance.textContent.replace(/[^0-9]/g, ''));
        if(balanceVal>0){
          this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal+balanceVal) + "원"
          this.balance.textContent = "0원"
        }else{
          alert('이미 모든 금액이 반환되었습니다.')
        }
      })


      const btnsCola = this.itemList.querySelectorAll('button')
      btnsCola.forEach((item)=>{
        item.addEventListener('click',(event)=>{
          const targetEl = event.currentTarget
          const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''))

          let isStaged = false
          const targetElPrice = parseInt(targetEl.dataset.price)
          const stagedListItem = this.stagedList.querySelectorAll('li')

          if(balanceVal >= targetElPrice) {
            this.balance.textContent = new Intl.NumberFormat.format(balanceVal - targetElPrice) +" 원"
            if(!isStaged){
              this.stagedItemGenerator(targetEl)
            }
          }else {
            alert('경고경고 잔액이 부족합니다.')
          }
        })
      })
  }


}

// console.log(this.myMoney.textContent.replace(',', ''))
export default Vendingmachine
import styled from "styled-components"
import closeBtn from '../../assets/images/icon-delete.png'
import ProductImage from "../Card/ProductImage/ProductImage"
import ProductPrice from "../Card/ProductPrice/ProductPrice"
import cartImg from '../../assets/images/icon-shopping-cart.svg'

import heart from '../../assets/images/icon-heart.svg'
const ModalContainer = styled.div`
  width: 990px;
  position: fixed;
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background: #fff;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  overflow-y: auto;
  border: 2px solid black;
`
const CloseBtn = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  background: url(${closeBtn}) no-repeat center / 20px 20px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 10px;
  float: right;
  flex-grow: 0;
`

const Main = styled.div`
  display: flex;
  width: 990px;
  flex-grow: 1;
  padding: 40px 60px;
  justify-content: space-between;
`


const ProductInfo = styled.div`
  width: 440px;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`
const ProductName = styled.h3`
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 0 10px;
  color: #333;
`
const ProductBae = styled.p`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #828282;
  margin-top: 100px;
  margin-bottom: 10px;
  flex-shrink: 1;
  flex-grow: 0;
`

const LineDiv = styled.div`
  width: 440px;
  height: 2px;
  background-color: #E0E0E0;
  flex-shrink: 0;
`

const CountContainer = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #E0E0E0 ;
  border-radius: 5px;
  flex-shrink: 0;
  overflow: hidden;
`
const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
`
const CountCont = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-left:  1px solid #E0E0E0;
  border-right:  1px solid #E0E0E0;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  align-items: center;
  display: flex;
  justify-content: center;

  
`


const 상품구매정보 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  vertical-align: text-bottom;
  margin-top: 16px;
  margin-bottom: 16px;
`

const 총상품금액 = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
`
const 금액컨테이너 = styled.div`
  
`
const 총수량 = styled.span`
  height: 18px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  vertical-align: bottom;
  position: relative;
  margin-right: 24px;
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 18px;
    background-color: #c4c4c4;
    top: 4px;
    right: -12px;
    
  }
`
const 금액 = styled(ProductPrice)`
  color: #EB5757;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 30px;
`


const 구매장바구니찜 = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  vertical-align: text-bottom;
  margin-top: 16px;
  
`

const 바로구매 = styled.span`
  flex: 1 1 308px;
  background-color: #6327FE;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`


const 장바구니 = styled.div`
  width: 60px;
  height: 60px;
  background: url(${cartImg}) no-repeat center / 25px 25px ;
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  margin: 0 6px;
  cursor: pointer;
`
const 찜하기 = styled.div`
  width: 60px;
  height: 60px;
  background: url(${heart}) no-repeat center / 25px 25px;
  border: 1px solid #BDBDBD;
  border-radius: 5px;
  cursor: pointer;
`


export function Modal({handleModal,thumbnailImg, productName,price}){
  const size = '400px'
  return (
    <>
      <ModalContainer >
        <CloseBtn onClick={handleModal}/>
        <Main>
          <ProductImage {...{thumbnailImg, productName,size}}/>
          <ProductInfo>
            <ProductName>{productName}</ProductName>
            <ProductPrice price={price}/>
            <ProductBae>택배배송 / 무료배송</ProductBae>
            <LineDiv/>
            <CountContainer>
              <Button>-</Button>
              <CountCont>1</CountCont>
              <Button>+</Button>
            </CountContainer>
            <LineDiv/>
            <상품구매정보>
              <총상품금액>총 상품 금액</총상품금액>
              <금액컨테이너>
                <총수량>총 수량 1개 </총수량>
                <금액 price={13500}/>
              </금액컨테이너>
            </상품구매정보>
            <구매장바구니찜>
              <바로구매>바로구매</바로구매>
              <장바구니>
              </장바구니>
              <찜하기/>
            </구매장바구니찜>
          </ProductInfo>
        </Main>
      </ModalContainer>
    </>
  )
}
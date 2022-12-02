import React, {useState} from 'react'
import ProductImage from './ProductImage/ProductImage'
import ProductName from './ProductName/ProductName'
import ProductPrice from './ProductPrice/ProductPrice'
import styled from 'styled-components'
import likeBtn from '../../assets/images/icon-heart.svg'
import likeBtnOn from '../../assets/images/icon-heart-on.svg'
import {ModalContainer} from '../Modal/Modal'
import {Modal} from '../Modal/Modal'

const ProductItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
const ProductImg = styled.div`
  position: relative;
  width: 380px;
  height: 380px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden; 
`
const LikeBtn = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  background: ${(props)=>{
    if(props.isOn){
      return `url(${likeBtnOn})`
    }else{
      return `url(${likeBtn})`
    }
  }} no-repeat center / contain;
  position: absolute;
  right: 0;
  bottom: 40px;
`
const ProductPriceContain = styled.div`
  display: flex;
  align-items: center;
`


export default function Card({productName,price,thumbnailImg}) {
  
  const [isOn,setIsOn] = useState(false)
  const handleToggle = ()=>{
    setIsOn(!isOn)
  }
  const [isOepn,setIsOpen] = useState(false)
  const handleModal = ()=>{
    setIsOpen(!isOepn)
  }
  return (
    <>
      <ProductItem >
        <ProductImg onClick={handleModal}>
          <ProductImage {...{thumbnailImg, productName }} />
        </ProductImg>
        <ProductName {...{productName}}/>
        <LikeBtn isOn={isOn} onClick={handleToggle}/>
        <ProductPriceContain>
          <ProductPrice {...{price}} />
        </ProductPriceContain>
      </ProductItem>
      {isOepn?
      <Modal onClick={handleModal} {...{handleModal,thumbnailImg, productName,price}}>이것은 제품상세 모달창</Modal>
      :null}
    </>
  )
}

import React, {useRef} from 'react'
import ProductImage from './ProductImage/ProductImage'
import ProductName from './ProductName/ProductName'
import ProductPrice from './ProductPrice/ProductPrice'
import './card.css'
import styled from 'styled-components'
import likeBtn from '../../assets/images/icon-heart.svg'


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
  background: url(${likeBtn}) no-repeat center / contain;
  position: absolute;
  right: 0;
  bottom: 40px;
`


export default function Card({productName,price,thumbnailImg}) {
  function handleLikeBtn(e){
    e.currentTarget.classList.toggle('on')
  }
  const likeBtn = useRef()
  return (
    <ProductItem>
      <ProductImg>
        <ProductImage {...{thumbnailImg, productName }} />
      </ProductImg>
      <ProductName {...{productName}}/>
      <LikeBtn ref={likeBtn} onClick={handleLikeBtn} className='like-btn'></LikeBtn>
      <div className='product-price'>
        <ProductPrice {...{price}} />
      </div>
    </ProductItem>
  )
}

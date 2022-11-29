import React from 'react'
import styled from 'styled-components'
const Price = styled.strong`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`
const Won = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-left: 2px;
`


export default function ProductPrice({price}) {
  return (

    <Price>{price}
      <Won>원</Won>
    </Price >

  )
}

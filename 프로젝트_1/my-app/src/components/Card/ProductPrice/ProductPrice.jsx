import React from 'react'
import styled from 'styled-components'
import './productPrice.css'

const Test = styled`
  strong{
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-left: 2px;
  }
`
export default function ProductPrice({price}) {
  return (
    <Test>
      <strong className='price m-price'>{price}<span>원</span></strong >
    </Test>
  )
}

import React from 'react'
import styled from 'styled-components'
// import './productName.css'

const PName = styled.strong`
  font-size: 18px;
  line-height: 22px;
  width: 338px;
  margin: 20px 0 10px;
`

export default function ProductName({productName}) {
  return (
    <PName className='sl-ellipsis'>{productName}</PName>
  )
}

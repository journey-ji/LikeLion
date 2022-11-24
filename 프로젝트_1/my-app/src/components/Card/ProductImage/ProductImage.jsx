import React from 'react'
import ProductName from '../ProductName/ProductName'

export default function ProductImage({thumbnailImg, productName}) {
    // console.log(thumbnailImg)
    const url = 'https://test.api.weniv.co.kr/' + thumbnailImg
    return (
        <img src={url} alt={productName}/>
    )
}

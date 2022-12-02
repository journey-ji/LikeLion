import React from 'react'
import styled from 'styled-components'



const PImg = styled.img`
    width: ${props=>{
        if(props.size){
            return props.size
        };
    }};

`

export default function ProductImage({thumbnailImg, productName,size}) {
    // console.log(thumbnailImg)
    const url = 'https://test.api.weniv.co.kr/' + thumbnailImg

    
    
    return (
        <PImg src={url} alt={productName} size={size}/>
    )
}

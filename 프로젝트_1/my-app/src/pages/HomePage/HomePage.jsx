import { useContext } from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card/Card'
import Cart from '../../components/Cart/Cart'
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData'
import {callAPIResponse} from '../../database/callApi'
import { data } from '../../database/data'


const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
  padding-bottom: 156px;    
`
const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;   
`
export default function HomePage() {
    const [loadData,setLoadData] = useState(null)

    useEffect(()=>{
        console.log('로딩중')
    },[])
    useEffect(()=>{
        if(loadData===null){
            return
        } else {
            console.log('로딩완료')
        }
    },[loadData])
    useContext(callAPIResponse).then(d=>{
        console.log('세팅')
        console.log(d)
        setLoadData(d)
    })

    
        
    return (
        <Main>
        {
            loadData !== null ? 
                <>
                    <ProductList>
                        {loadData.map(item =><Card key={item.id} {...item}/>)}
                    </ProductList>
                    <Cart/>
                </>
            : <FailLoadData />
        }
        </Main>
    )
    
}
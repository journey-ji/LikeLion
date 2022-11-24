import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../../components/Card/Card'
import Cart from '../../components/Cart/Cart'
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData'
import { data } from '../../database/data'
import './homePage.css'

export default function HomePage() {
    // console.log(data)
    // const data = null
    const [error,setError] = useState(null)
    const [isLoaded,setIsLoaded] = useState(false)
    const [items,setItems] = useState([])
    useEffect(()=>{
      const getData = async ()=>{
        try{
          const res = await fetch('https://test.api.weniv.co.kr/mall')
          const result = await res.json()
          setItems(result)
          setIsLoaded(true)
        }catch(error){
          setError(error)
        }
      }
    },[])
    if(error){
      console.log(error)
      return <div>에러발생</div>
    } else if(!isLoaded){
      return <div>로딩중</div>
    }
    return (
        <main className='product'>
        {
            data !== null ? 
              <>
                  <ul className='product-list'>
                      {data.map(item =><Card key={item.id} {...item}/>)}
                  </ul>
                  <Cart/>
              </>
            : <FailLoadData />
        }
        </main>
    )
}
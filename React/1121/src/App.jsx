import { useEffect, useLayoutEffect, useState } from "react"

export default function App() {
  const [num,setNum] = useState(0)
  const onClick = ()=>{
    setNum(num+1)
  }
  
  useLayoutEffect(()=>{
    console.log('마운트 될 때 브라우저에 그려주기 전에 딱 한번 실행!')
    return ()=>{
      console.log("언마운트 될 때 딱한번 실행")
    }

  },[])

  useLayoutEffect(()=>{
    console.log('마운트/업데이트 될 때마다 브라우저에 그려주기 전에 실행!')
    return ()=>{
      console.log("업데이트 될 때랑 언마운트 될 때 실행")
    }

  })

  useLayoutEffect(()=>{
    console.log('마운트 될 때, num State 변경시 마다 브라우저에 그려주기 전에 실행!')
    return ()=>{
      console.log("업데이트 될 때랑 언마운트 될 때 실행")
    }
  },[num])

  //useLayoutEffect가 모두 끝나면 아래 useEffect 실행된다.

  useEffect(()=>{
    console.log('마운트 될 때, 브라우저에 그려진 후 딱 한번 실행')
    return (()=>{
      console.log('언마운트 될 때 딱 한번 실행')
    })
  },[])

  useEffect(()=>{
    console.log('마운트/업데이트 될 때마다 브라우저에 그려진 후에 실행!')
    return (()=>{
      console.log('언마운트 될 때, 업데이트 될 때 실행')
    })
  })

  useEffect(()=>{
    console.log('마운트 될 때, num State 변경으로 업데이트 될 때, 브라우저에 그려진 후에 실행!')
    return (()=>{
      console.log('언마운트 될 때, 업데이트 될 때 실행')
    })
  },[num])
  
  return (
    <>
      <button onClick={onClick}>{num}</button>
    </>
  )
}

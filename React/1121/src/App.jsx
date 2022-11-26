import React from 'react'
<<<<<<< HEAD
import { createContext } from 'react'

const UserInfo = createContext({name:"gray",id:"grayIsFree"})

const HelloLicat = ()=>{
  return (
    <UserInfo.Consumer>
      {(value)=>
        <>
          <h2>{value.id}</h2>
          <strong>{value.name}</strong>
          <HelloLicatTwo/>
        </>
      }
    </UserInfo.Consumer>
  )
}

const HelloLicatTwo = ()=>{
  return (
    <UserInfo.Consumer>
      {(value)=>
        <>
          <h2>Two : {value.id}</h2>
          <strong>Two: {value.name}</strong>
        </>
      }
    </UserInfo.Consumer>
  )
}


export default function App() {
  return (
    <HelloLicat/>
=======

export default function App() {
  return (
    <div>App</div>
>>>>>>> d80aeb7d0509eb980edd94e9bff1573151a78427
  )
}

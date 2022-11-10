import React from 'react'
import Header from './Header'
import Form from './Form'
import ResultCont from './ResultCont'
import ResultLoading from './ResultLoading'

export default function Main() {
  return (
    <main id="app">
      <Header/>
      <Form/>
      <ResultLoading/>
      <ResultCont/>
    </main>
  )
}

import React from 'react'
import { useReducer } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { appFireStore } from '../firebase/config'
import { async } from '@firebase/util'

const initState = {
  document : null,
  isPending : false,
  error : null,
  success : false
}
const storeReducer = (state,action)=>{
  switch(action.type){
    case 'isPending':
      return {isPending:true,document:null, error:null,success:false}
      // return {...state, isPending:true} 위아래 뭐가달라?
    case 'addDoc':
      return {isPending:false,document:action.payload, error:null,success:true}
    case 'error':
      return {isPending:false,document:null, error:action.payload,success:false}
    default:
      return state
  }
}

export const useFirestore = (transaction)=> {
  const [response, dispatch] = useReducer(storeReducer,initState)

  const colRef = collection(appFireStore, transaction)
  

  const addDocument = async (doc)=>{
    dispatch({type:'isPending'})
    try{
      const docRef = await addDoc(colRef,doc)
      dispatch({type:'addDoc',payload: docRef})
    }catch (e) {
      dispatch({type:'error',payload: e.message})
    }
  }
  const deleteDocument = (id)=>{

  }
  return {addDocument, deleteDocument, response}
}

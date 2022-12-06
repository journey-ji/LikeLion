import { createContext, useReducer } from "react";


// context 객체를 생성합니다.
const AuthContext = createContext()


// 해당 context를 구독할 범위를 지정
const authReducer = (state,action)=>{
  switch (action.type){
    case 'login':
      return {...state, user:action.payload}
      case 'logout':
        return {...state,user:null}
    default:
      return state
  }

}

const AuthContextProvider = ({children})=>{
  

  const [state,dispatch] = useReducer(authReducer,{user:null})
  console.log(state)
  return (
    <AuthContext.Provider value={{...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
export {AuthContext, AuthContextProvider}
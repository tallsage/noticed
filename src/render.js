import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import  
{ createN, updateStringTypography, 
    updateStringDate, updateStringCounter,
    updateStringText, deleteNoticed} from './redux/state'
import App from './App'
//react 18

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))

export var renderEntireTree = (state) =>{
root.render(
    <Context.Provider value={{
         state, createN, updateStringTypography, updateStringDate, updateStringCounter, updateStringText, deleteNoticed
      }}>
        <App />
      </Context.Provider>
    )
}
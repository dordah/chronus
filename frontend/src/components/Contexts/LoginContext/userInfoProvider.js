import React, {useState, createContext, useEffect} from 'react'

export const userInfoContext = createContext({})

const UserInfoProvider = ({children}) => {

    const [fullNameState,setFullName] = useState("") 
    const [passwordState,setPassword] = useState("") 
    const [emailState,setEmail] = useState("") 
    const [isLoggedIn , setIsLoggedIn] = useState(false) // is user is logged in, info from server
    const [viewer, setViewer] = useState(0) // Authurization mode for user 0,1,2, info from server 
  

    useEffect( async ()  => {
      let response = null 
      let message = null
      try{
       response = await fetch("/cookie", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
    }
    catch(err) {
      message.innerHTML = "Error: " + err + ".";
    }
    const json = await response.json()
    console.log(json)
    if (json !== undefined) {
        setFullName(json.name)
        setPassword("")
        setEmail(json.email)
        setIsLoggedIn(json.loggedIn)
        setViewer(json.viewer) 
    }
    }, [])
   

    return ( 
      <userInfoContext.Provider 
      value={[[fullNameState,setFullName],
      [passwordState,setPassword],
      [emailState,setEmail],
      [isLoggedIn, setIsLoggedIn],
      [viewer, setViewer],
      ]}>
           {children}
      </userInfoContext.Provider>
    )
}

export default UserInfoProvider
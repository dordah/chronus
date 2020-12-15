import React, {useState, createContext, useEffect} from 'react'

export const userInfoContext = createContext({})

const UserInfoProvider = ({children}) => {

    const [fullNameState,setFullName] = useState("")
    const [passwordState,setPassword] = useState("")
    const [emailState,setEmail] = useState("")
    const [isAuth, SetisAuth] = useState(false)
    const [viewer, setViewer] = useState(0)

    useEffect(() => {
      const localStorageData = (localStorage.getItem("UserInfo"))
      const parsedData = JSON.parse(localStorageData)
      setFullName(parsedData.userName)
      setPassword(parsedData.userPassword)
      setEmail(parsedData.userEmail)
      SetisAuth(parsedData.userIsAuth)
      setViewer(parsedData.userViewer)
    }, [])

    useEffect(() => {
      const userInfo = {"userName":fullNameState,"userPassword":passwordState,"userEmail":emailState,"userIsAuth":isAuth, "userViewer":viewer}
      localStorage.setItem("UserInfo", JSON.stringify(userInfo))
    },[fullNameState,passwordState,emailState,isAuth,viewer])

    return ( 
      <userInfoContext.Provider 
      value={[[fullNameState,setFullName],
      [passwordState,setPassword],
      [emailState,setEmail],
      [isAuth, SetisAuth],
      [viewer, setViewer]]}>
           {children}
      </userInfoContext.Provider>
    )
}

export default UserInfoProvider
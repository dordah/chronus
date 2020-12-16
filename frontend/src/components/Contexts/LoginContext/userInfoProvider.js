import React, {useState, createContext, useEffect} from 'react'

export const userInfoContext = createContext({})

const UserInfoProvider = ({children}) => {

    const [fullNameState,setFullName] = useState("")
    const [passwordState,setPassword] = useState("")
    const [emailState,setEmail] = useState("")
    const [isAuth, SetisAuth] = useState(false)
    const [viewer, setViewer] = useState(0)
    const [accessToken, SetaccessToken] = useState("")

    useEffect(() => {
      const localStorageData = (localStorage.getItem("UserInfo"))
      const parsedData = JSON.parse(localStorageData)
      setFullName(parsedData.userName)
      setPassword(parsedData.userPassword)
      setEmail(parsedData.userEmail)
      SetisAuth(parsedData.userIsAuth)
      setViewer(parsedData.userViewer)
      SetaccessToken(parsedData.accessToken)
    }, [])

    useEffect(() => {
      const userInfo = {"userName":fullNameState,"userPassword":passwordState,"userEmail":emailState,"userIsAuth":isAuth, "userViewer":viewer, "accessToken":accessToken}
      localStorage.setItem("UserInfo", JSON.stringify(userInfo))
    },[fullNameState,passwordState,emailState,isAuth,viewer,accessToken])

    return ( 
      <userInfoContext.Provider 
      value={[[fullNameState,setFullName],
      [passwordState,setPassword],
      [emailState,setEmail],
      [isAuth, SetisAuth],
      [viewer, setViewer],
      [accessToken, SetaccessToken]]}>
           {children}
      </userInfoContext.Provider>
    )
}

export default UserInfoProvider
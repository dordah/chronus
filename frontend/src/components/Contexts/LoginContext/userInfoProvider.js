import React, { useState, createContext, useEffect } from "react";

export const userInfoContext = createContext({});

const UserInfoProvider = ({ children }) => {
  const [fisrtNameState, setfisrtNameState] = useState("");
  const [lastNameState, setlastNameState] = useState("");
  const [passwordState, setPassword] = useState("");
  const [emailState, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // is user is lo
  const [viewer, setViewer] = useState(false); // Authurization mode for user 0,1,2, info from server

  useEffect(() => {
    console.log("useefeect runnig: ");
    const fetchData = async () => {
      const response = await fetch("/cookie", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();
      console.log("cookie json: " + json);

      if (json != undefined || json == null) {
        setfisrtNameState(json.first_name);
        setfisrtNameState(json.last_name);
        setPassword("");
        setEmail(json.email);
        setIsLoggedIn(json.logged_in);
        setViewer(json.has_profile);
      }
    };
    fetchData();
  }, []);



  return (
    <userInfoContext.Provider
      value={[
        [fisrtNameState, setfisrtNameState],
        [lastNameState, setlastNameState],
        [passwordState, setPassword],
        [emailState, setEmail],
        [isLoggedIn, setIsLoggedIn],
        [viewer, setViewer],
      ]}
    >
      {children}
    </userInfoContext.Provider>
  );
};

export default UserInfoProvider;

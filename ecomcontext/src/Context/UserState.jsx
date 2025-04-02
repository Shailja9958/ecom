import React, { Children } from 'react'
import UserContext from './UserContext';

const UserState = (Children) => {
    let UserData = JSON.parse(localStorage.getItem("Login"));
    const [user, setuser] = useState({
      email: UserData ? UserData.email : "",
      login: UserData ? UserData.login : false,
    });

  return (
    <UserContext.Provider value={{user,setuser}}>
      {Children}
    </UserContext.Provider>
  )
}

export default UserState

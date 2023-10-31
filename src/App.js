import React, { useState , Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/Usreslist";

function App() {
  const [userlist, setUserlist]= useState([])

  const addUserHandler = (uName,uAge,uCollage) =>{
    setUserlist ((prev => {
      return [...prev , { name:uName , age:uAge , collage:uCollage , id:Math.random().toString()}]
    }))
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userlist} />
    </Fragment>
  );
}

export default App;

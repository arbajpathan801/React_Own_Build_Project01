import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/Usreslist";

function App() {
  const [userlist, setUserlist]= useState([])

  const addUserHandler = (uName,uAge) =>{
    setUserlist ((prev => {
      return [...prev , { name:uName , age:uAge , id:Math.random().toString()}]
    }))
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userlist} />
    </div>
  );
}

export default App;

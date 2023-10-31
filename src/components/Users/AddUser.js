import React, { useState ,useRef} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../Errormodule/ErroeModal";

const AddUser = (props) => {

  const nameRef= useRef()
  const ageRef= useRef()
  const collageRef= useRef()

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUserName= nameRef.current.value
    const enteredUserAge= ageRef.current.value
    const enteredUserCollage= collageRef.current.value
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredUserCollage.trim().length === 0 ) {
      setError({
        title: "Invalid Input",
        message: "Please inter an valid name, age and collage (non-empty-values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please inter an valid  age (>0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge, enteredUserCollage);
    nameRef.current.value=''
    ageRef.current.value=''
    collageRef.current.value=''
  };

  
  const errorHandler=() => {
    setError(null)
  }

  return (
    <React.Fragment>
     {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username"> UserName </label>
          <input
            id="username"
            type="text"
            ref={nameRef}
          />
          <label htmlFor="age"> Age (years) </label>
          <input
            id="age"
            type="number"
            ref={ageRef}
          />
          <label htmlFor="collage"> Collage Name </label>
          <input
            id="collage"
            type="text"
            ref={collageRef}
          />
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default AddUser;

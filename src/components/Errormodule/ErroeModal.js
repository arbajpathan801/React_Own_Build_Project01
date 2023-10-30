import React from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./ErrorModal.module.css";

const BackDrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={props.onConfirm}
    ></div>
  );
};
const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.action}>
        <Button onClick={props.onConfirm}>Okey</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm ={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};
export default ErrorModal;

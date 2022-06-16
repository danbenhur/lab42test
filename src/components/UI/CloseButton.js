import classes from "./CloseButton.module.css";

const CloseButton = (props) => {
  return (
    <button className={classes.close} onClick={props.onClick}>
      <span>&times;</span>
    </button>
  );
};

export default CloseButton;

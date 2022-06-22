import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.primary_button} onClick={props.buttonAction}>
      {props.buttonText}
    </button>
  );
};

export default Button;

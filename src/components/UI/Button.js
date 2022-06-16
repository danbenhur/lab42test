import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button className={classes.primary_button} onClick={props.buttonAction}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Button;

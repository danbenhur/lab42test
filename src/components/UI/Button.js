const Button = (props) => {
  return (
    <button className={props.buttonClass} onClick={props.buttonAction}>
      {props.buttonText}
    </button>
  );
};

export default Button;

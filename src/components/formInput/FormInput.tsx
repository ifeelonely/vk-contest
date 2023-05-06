import FormInputProps from './FormInputInt';
import classes from './FormInput.module.css';

function FormInput({ type, placeholder, icon }: FormInputProps): JSX.Element {
  return (
    <div className={classes.formInputContainer}>
      {icon ? icon : null}
      <input
        className={classes.formInput}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormInput;

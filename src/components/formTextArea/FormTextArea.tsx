import classes from './FormTextArea.module.css';
import FormTextAreaInt from './FormTextAreaInt';

function FormTextArea({ label, setForm, type, value }: FormTextAreaInt) {
  return (
    <div className={classes.textAreaContainer}>
      <label htmlFor="">{label}</label>
      <textarea
      placeholder='Введите текст'
        value={value}
        className={classes.textArea}
        onChange={(e) => setForm(type, e.target.value)}
      />
    </div>
  );
}

export default FormTextArea;

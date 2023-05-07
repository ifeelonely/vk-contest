import classes from './FormSelect.module.css';
import FormSelectProps from './FormSelectInt';

function FormSelect({
  options,
  defaultValue,
  icon,
  setForm,
  type,
}: FormSelectProps) {
  return (
    <div className={classes.selectContainer}>
      <div className={classes.selectIcon}>{icon}</div>
      <select
        className={classes.formSelect}
        defaultValue={defaultValue}
        onChange={(e) => setForm(type, e.target.value)}
      >
        <option value={defaultValue} disabled>
          {defaultValue}
        </option>
        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormSelect;

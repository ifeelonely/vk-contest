import classes from './FormSelect.module.css';
import FormSelectProps from './FormSelectInt';

function FormSelect({
  options,
  defaultValue,
  icon,
  setForm,
  type,
  value,
}: FormSelectProps) {
  return (
    <div className={classes.selectBlockContainer}>
      <label htmlFor="" className={classes.title}>{defaultValue}</label>
      <div className={classes.selectContainer}>
        <div className={classes.selectIcon}>{icon}</div>
        <select
          className={classes.formSelect}
          onChange={(e) => setForm(type, e.target.value)}
          value={value}
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
    </div>
  );
}

export default FormSelect;

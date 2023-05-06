import { DatePicker } from '@mui/x-date-pickers';
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
import FormTimeorDateProps from './FormTimeorDateInt';
import classes from './FormTimeorDate.module.css';

const defaultComponentStyles = {
  width: '100%',
  input: {
    color: 'var(--font-grey)',
    fontSize: '1.2rem',
    backgroundColor: 'var(--main-black)',
  },
  '& .MuiSvgIcon-root': {
    color: 'var(--font-grey)',
    fontSize: '2rem',
  },
};

function FormTimeorDate({ type, labelText }: FormTimeorDateProps): JSX.Element {
  return (
    <div className={classes.formTimeContainer}>
      <label htmlFor="">{labelText}</label>
      {type === 'date' ? (
        <DatePicker sx={defaultComponentStyles} />
      ) : (
        <MultiInputTimeRangeField sx={defaultComponentStyles} />
      )}
    </div>
  );
}

export default FormTimeorDate;

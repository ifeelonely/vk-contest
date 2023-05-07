import { DatePicker } from '@mui/x-date-pickers';
import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
import FormTimeorDateProps from './FormTimeorDateInt';
import classes from './FormTimeorDate.module.css';
import { DateRange } from '@mui/x-date-pickers-pro';

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

function FormTimeorDate({
  type,
  labelText,
  setForm,
}: FormTimeorDateProps): JSX.Element {
  return (
    <div className={classes.formTimeContainer}>
      <label htmlFor="">{labelText}</label>
      {type === 'date' ? (
        <DatePicker
          onChange={(value: { $d: string } | null, err) => {
            if (!err.validationError) setForm(type, value!.$d + '');
          }}
          sx={defaultComponentStyles}
        />
      ) : (
        <MultiInputTimeRangeField
          onChange={(values: DateRange<{ $d: string }>, err) => {
            let left = '';
            let right = '';
            if (!err.validationError[0] && values[0]) left = values[0].$d;
            if (!err.validationError[1] && values[1]) right = values[1].$d;
            if (left && right)
              setForm(
                type,
                `Начало: ${(left + '').split(' ')[4]} Конец: ${
                  (right + '').split(' ')[4]
                }`
              );
          }}
          sx={defaultComponentStyles}
        />
      )}
    </div>
  );
}

export default FormTimeorDate;

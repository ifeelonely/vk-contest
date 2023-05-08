import FormSelect from '../formSelect/FormSelect';
import classes from './BookForm.module.css';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { MdOutlineMeetingRoom } from 'react-icons/md';
import { SiLevelsdotfyi } from 'react-icons/si';
import { mockData } from '../../mockData/SelectData';
import { useSetForm } from './hooks/useSetForm';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { FormSlice } from '../../store/reducers/FormSlice';
import { useEffect, useState } from 'react';
import FormTextArea from '../formTextArea/FormTextArea';
import { SingleInputTimeRangeField } from '@mui/x-date-pickers-pro';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const defaultComponentStyles = {
  width: '100%',
  label: {
    color: 'var(--font-grey)',
    fontSize: '1.2rem',
  },
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

function BookForm(): JSX.Element {
  const { scrapers, floors, meetingRooms } = mockData;
  const { setValid, clearForm, setDate, setTime } = FormSlice.actions;
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const formObj = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const setForm = useSetForm();
  console.log(formObj);
  useEffect(() => {
    dispatch(setValid());
  }, [formObj]);

  const onSubmitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(formObj);
    setFirstRender(false);
    if (formObj.FormReducer.isFormValid) console.log(JSON.stringify(formObj));
  };

  const onClearHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(clearForm());
    setFirstRender(true);
    console.log(formObj);
  };

  return (
    <div className={classes.bookForm}>
      {!formObj.FormReducer.isFormValid && !firstRender ? (
        <h1 style={{ color: 'red' }}>Заполните все поля формы!</h1>
      ) : null}
      <h1>Бронированиe комнаты</h1>
      <form className={classes.bookFormInner}>
        <FormSelect
          options={scrapers}
          icon={<TbBuildingSkyscraper />}
          defaultValue="Выберите башню"
          setForm={setForm}
          type="tower"
          value={formObj.FormReducer.towers}
        />
        <FormSelect
          options={floors}
          icon={<SiLevelsdotfyi />}
          defaultValue="Выберите этаж"
          setForm={setForm}
          type="floor"
          value={formObj.FormReducer.floor}
        />
        <FormSelect
          options={meetingRooms}
          icon={<MdOutlineMeetingRoom />}
          defaultValue="Выберите комнату"
          setForm={setForm}
          type="room"
          value={formObj.FormReducer.meetingRoom}
        />
        <DatePicker
          value={formObj.FormReducer.date}
          onChange={(currentValue, err) => {
            if (currentValue && !err.validationError)
              dispatch(setDate(new Date(currentValue).toString()));
          }}
          label="Введите дату"
          sx={defaultComponentStyles}
        />
        <SingleInputTimeRangeField
          value={formObj.FormReducer.time}
          onChange={(currentValue) => {
              dispatch(setTime(currentValue.join('&')));
          }}
          label="Введите время"
          sx={defaultComponentStyles}
        />
        <FormTextArea
          type="comment"
          label="Ваш комментарий"
          setForm={setForm}
          value={formObj.FormReducer.comment}
        />

        <div className={classes.btnContainer}>
          <button className="btn" onClick={(e) => onSubmitHandler(e)}>
            Отправить
          </button>
          <button className="btn btn-grey" onClick={(e) => onClearHandler(e)}>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;

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
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { defaultComponentStyles } from './MaterialUIStyle';

function BookForm(): JSX.Element {
  const { scrapers, floors, meetingRooms } = mockData;
  const { setValid, clearForm, setDate, setLeftTime, setRightTime } =
    FormSlice.actions;
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const formObj = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const setForm = useSetForm();

  useEffect(() => {
    dispatch(setValid());
  }, [formObj]);

  const onSubmitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setFirstRender(false);
    if (formObj.FormReducer.isFormValid) console.log(JSON.stringify(formObj));
  };

  const onClearHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(clearForm());
    setFirstRender(true);
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
          onChange={(currentValue) => dispatch(setDate(currentValue))}
          label="Введите дату"
          sx={defaultComponentStyles}
        />
        <div className={classes.timeContainer}>
          <TimePicker
            value={formObj.FormReducer.leftTime}
            onChange={(currentValue) => dispatch(setLeftTime(currentValue))}
            label="Начало"
            sx={defaultComponentStyles}
          />
          <TimePicker
            value={formObj.FormReducer.rightTime}
            onChange={(currentValue) => dispatch(setRightTime(currentValue))}
            label="Конец"
            sx={defaultComponentStyles}
          />
        </div>

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

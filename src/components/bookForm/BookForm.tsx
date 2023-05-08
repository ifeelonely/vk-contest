import FormSelect from '../formSelect/FormSelect';
import classes from './BookForm.module.css';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { MdOutlineMeetingRoom } from 'react-icons/md';
import { SiLevelsdotfyi } from 'react-icons/si';
import { mockData } from '../../mockData/SelectData';
import FormTimeorDate from '../formTimeorDate/FormTimeorDate';
import { useSetForm } from './hooks/useSetForm';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { FormSlice } from '../../store/reducers/FormSlice';
import { useEffect, useState } from 'react';
import FormTextArea from '../formTextArea/FormTextArea';

function BookForm(): JSX.Element {
  const { scrapers, floors, meetingRooms } = mockData;
  const { setValid, clearForm } = FormSlice.actions;
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const formObj = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const setForm = useSetForm();

  useEffect(() => {
    dispatch(setValid());
    console.log('jopa');
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
        <FormTimeorDate
          labelText="Выберите дату"
          setForm={setForm}
          type="date"
        />
        <FormTimeorDate
          labelText="Выберите время"
          setForm={setForm}
          type="time"
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

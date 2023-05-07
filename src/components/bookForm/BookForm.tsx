import FormSelect from '../formSelect/FormSelect';
import classes from './BookForm.module.css';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { MdOutlineMeetingRoom } from 'react-icons/md';
import { SiLevelsdotfyi } from 'react-icons/si';
import { mockData } from '../../mockData/SelectData';
import FormTimeorDate from '../formTimeorDate/FormTimeorDate';
import { useSetForm } from './hooks/useSetForm';
import { useAppSelector } from '../../store/hooks/redux';

function BookForm(): JSX.Element {
  const { scrapers, floors, meetingRooms } = mockData;
  const formObj = useAppSelector((state) => state);
  const setForm = useSetForm();

  const onSubmitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(JSON.stringify(formObj));
  };

  return (
    <div className={classes.bookForm}>
      <h1>Бронированиe комнаты</h1>
      <form className={classes.bookFormInner}>
        <FormSelect
          options={scrapers}
          icon={<TbBuildingSkyscraper />}
          defaultValue="Выберите башню"
          setForm={setForm}
          type="tower"
        />
        <FormSelect
          options={floors}
          icon={<SiLevelsdotfyi />}
          defaultValue="Выберите этаж"
          setForm={setForm}
          type="floor"
        />
        <FormSelect
          options={meetingRooms}
          icon={<MdOutlineMeetingRoom />}
          defaultValue="Выберите комнату"
          setForm={setForm}
          type="room"
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
        <div className={classes.btnContainer}>
          <button className="btn" onClick={(e) => onSubmitHandler(e)}>
            Отправить
          </button>
          <button className="btn btn-grey">Очистить</button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;

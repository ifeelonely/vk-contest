import FormSelect from '../formSelect/FormSelect';
import classes from './BookForm.module.css';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { MdOutlineMeetingRoom } from 'react-icons/md';
import { SiLevelsdotfyi } from 'react-icons/si';
import { mockData } from '../../mockData/SelectData';
import FormTimeorDate from '../formTimeorDate/FormTimeorDate';

function BookForm(): JSX.Element {
  const { scrapers, floors, meetingRooms } = mockData;
  return (
    <div className={classes.bookForm}>
      <h1>Бронированиe комнаты</h1>
      <form className={classes.bookFormInner}>
        <FormSelect
          options={scrapers}
          icon={<TbBuildingSkyscraper />}
          defaultValue="Выберите башню"
        />
        <FormSelect
          options={floors}
          icon={<SiLevelsdotfyi />}
          defaultValue="Выберите этаж"
        />
        <FormSelect
          options={meetingRooms}
          icon={<MdOutlineMeetingRoom />}
          defaultValue="Выберите комнату"
        />
        <FormTimeorDate type="date" labelText="Выберите дату" />
        <FormTimeorDate type="time" labelText="Выберите время" />
        <div className={classes.btnContainer}>
          <button className='btn'>Отправить</button>
          <button className='btn btn-grey'>Очистить</button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;

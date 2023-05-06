import FormSelect from '../formSelect/FormSelect';
import classes from './BookForm.module.css';
import { TbBuildingSkyscraper } from 'react-icons/tb';
import { MdOutlineMeetingRoom } from 'react-icons/md';
import { SiLevelsdotfyi } from 'react-icons/si';
import { mockData } from '../../mockData/SelectData';
import { DatePicker } from '@mui/x-date-pickers';

function BookForm(): JSX.Element {
  const { scrapers, floors, meetingRooms } = mockData;
  return (
    <div className={classes.bookForm}>
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
        <DatePicker />
      </form>
    </div>
  );
}

export default BookForm;

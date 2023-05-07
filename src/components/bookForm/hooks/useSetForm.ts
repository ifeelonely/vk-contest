import { FormSlice } from '../../../store/reducers/FormSlice';
import { useAppDispatch } from '../../../store/hooks/redux';

export function useSetForm() {
  const { setTowers, setFloor, setMeetingRoom, setDate, setTime } =
    FormSlice.actions;
  const dispatch = useAppDispatch();
  return (type: string, value: string) => {
    switch (type) {
      case 'tower':
        dispatch(setTowers(value));
        break;
      case 'floor':
        dispatch(setFloor(value));
        break;
      case 'room':
        dispatch(setMeetingRoom(value));
        break;
      case 'date':
        dispatch(setDate(value));
        break;
      case 'time':
        dispatch(setTime(value));
        break;
      default:
        break;
    }
  };
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';
interface FormState {
  towers: string;
  floor: string | number;
  meetingRoom: string | number;
  date: Dayjs | null;
  leftTime: null | Date | string;
  rightTime: null | Date | string;
  comment: string;
  isFormValid: boolean;
}

const initialState: FormState = {
  towers: 'A',
  floor: '3',
  meetingRoom: '1',
  date: null,
  leftTime: null,
  rightTime: null,
  comment: '',
  isFormValid: false,
};

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setTowers(state, action: PayloadAction<string>) {
      state.towers = action.payload;
    },
    setFloor(state, action: PayloadAction<string | number>) {
      state.floor = action.payload;
    },
    setMeetingRoom(state, action: PayloadAction<string | number>) {
      state.meetingRoom = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload.toDate().toString();
    },
    setLeftTime(state, action) {
      state.leftTime = action.payload.toDate().toString();
    },
    setRightTime(state, action) {
      state.rightTime = action.payload.toDate().toString();
    },
    setComment(state, action: PayloadAction<string>) {
      state.comment = action.payload;
    },
    setValid(state) {
      state.isFormValid = Boolean(
        state.floor &&
          state.leftTime &&
          state.rightTime &&
          state.date &&
          state.meetingRoom &&
          state.towers &&
          state.comment
      );
    },
    clearForm(state) {
      state.date = null;
      state.towers = 'A';
      state.floor = '3';
      state.meetingRoom = '1';
      state.leftTime = null;
      state.rightTime = null;
      state.isFormValid = false;
      state.comment = '';
    },
  },
});

export default FormSlice.reducer;

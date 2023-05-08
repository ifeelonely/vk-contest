import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';
interface FormState {
  towers: string;
  floor: string | number;
  meetingRoom: string | number;
  date: Dayjs | null;
  time: [null, null] | [Dayjs, Dayjs];
  comment: string;
  isFormValid: boolean;
}

const initialState: FormState = {
  towers: 'A',
  floor: '3',
  meetingRoom: '1',
  date: null,
  time: [null, null],
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
      state.date = action.payload;
    },
    setTime(state, action) {
      state.time = action.payload;
    },
    setComment(state, action: PayloadAction<string>) {
      state.comment = action.payload;
    },
    setValid(state) {
      state.isFormValid = Boolean(
        state.date &&
          state.floor &&
          state.meetingRoom &&
          state.time &&
          state.towers &&
          state.comment
      );
    },
    clearForm(state) {
      state.date = null;
      state.towers = '';
      state.floor = '';
      state.meetingRoom = '';
      state.time = [null, null];
      state.isFormValid = false;
      state.comment = '';
    },
  },
});

export default FormSlice.reducer;

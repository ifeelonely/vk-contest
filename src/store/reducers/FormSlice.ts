import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface FormState {
  towers: string;
  floor: string | number;
  meetingRoom: string | number;
  date: string;
  time: string;
  comment: string;
  isFormValid: boolean;
}

const initialState: FormState = {
  towers: 'A',
  floor: '3',
  meetingRoom: '1',
  date: '',
  time: '',
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
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    setTime(state, action: PayloadAction<string>) {
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
      state.date = '';
      state.towers = '';
      state.floor = '';
      state.meetingRoom = '';
      state.date = '';
      state.time = '';
      state.isFormValid = false;
      state.comment = '';
    },
  },
});

export default FormSlice.reducer;

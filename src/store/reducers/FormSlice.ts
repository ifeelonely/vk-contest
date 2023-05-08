import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface FormState {
  towers: string;
  floor: string | number;
  meetingRoom: string | number;
  date: Date | null | string;
  time: [Date | null, Date | null];
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
    setDate(state, action: PayloadAction<Date | null | string>) {
      console.log(action.payload);
      
      state.date = action.payload; 
    },
    setTime(state, action) {
      console.log(action.payload)
      state.time = action.payload.split('&');
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

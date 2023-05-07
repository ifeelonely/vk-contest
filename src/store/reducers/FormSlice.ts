import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface FormState {
  towers: string;
  floor: string | number;
  meetingRoom: string | number;
  date: string;
  time: string;
}

const initialState: FormState = {
  towers: '',
  floor: '',
  meetingRoom: '',
  date: '',
  time: '',
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
  },
});

export default FormSlice.reducer;

import { ISP } from "@/Models/isp";
import { createSlice } from "@reduxjs/toolkit";

interface IspState {
  isps: ISP[];
  apiHits: number;
}

interface UpdateStateActionPayload {
  payload: ISP[];
  type: string;
}

const initialState: IspState = {
  isps: [],
  apiHits: 0,
};

export const ispSlice = createSlice({
  name: "isp",
  initialState,
  reducers: {
    updateIsps: (state, action: UpdateStateActionPayload) => {
      state.isps = action.payload;
    },
    updateApiHits: (state) => {
      state.apiHits = state.apiHits + 1;
    },
  },
});

export const { updateIsps, updateApiHits } = ispSlice.actions;

export default ispSlice.reducer;

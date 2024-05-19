import { createSlice } from "@reduxjs/toolkit";

export interface IspState {
  ispsCount: number;
  apiHits: number;
}

interface UpdateStateActionPayload {
  payload: number;
  type: string;
}

const initialState: IspState = {
  ispsCount: 0,
  apiHits: 0,
};

export const ispSlice = createSlice({
  name: "isp",
  initialState,
  reducers: {
    updateIsps: (state, action: UpdateStateActionPayload) => {
      state.ispsCount = action.payload;
    },
    updateApiHits: (state) => {
      state.apiHits = state.apiHits + 1;
    },
  },
});

export const { updateIsps, updateApiHits } = ispSlice.actions;

export default ispSlice.reducer;

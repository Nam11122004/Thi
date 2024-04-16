import { createReducer } from "@reduxjs/toolkit";
import { removeData, updateData, addData } from "./api";
import { hienThi, xoa, sua, Them } from "./actions";

const initialState = {
  LopHoc: []
};

const lopHocReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(Them, (state, action) => {
    const newItem = action.payload;
    addData(newItem);
    state.LopHoc.push(newItem);
  })
    .addCase(hienThi, (state, action) => {
      state.LopHoc = action.payload;
    })
    .addCase(xoa, (state, action) => {
      const itemId = action.payload;
      removeData(itemId);
      state.LopHoc = state.LopHoc.filter(item => item.id !== itemId);
    })
    .addCase(sua, (state, action) => {
      const { itemId, updateItem } = action.payload;
      updateData(itemId, updateItem);
      state.LopHoc = state.LopHoc.map(item => {
        if (item.id === itemId) {
          return { ...item, ...updateItem };
        }
        return item;
      });
    });
});

export default lopHocReducer;

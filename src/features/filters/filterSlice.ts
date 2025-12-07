import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FilterCondition, FilterState } from '../../types';

const initialState: FilterState = {
  conditions: [],
  globalOperation: 'AND',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilterCondition: (state, action: PayloadAction<FilterCondition>) => {
      state.conditions.push(action.payload);
    },
    removeFilterCondition: (state, action: PayloadAction<string>) => {
      state.conditions = state.conditions.filter(c => c.id !== action.payload);
    },
    updateFilterCondition: (state, action: PayloadAction<FilterCondition>) => {
      const index = state.conditions.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.conditions[index] = action.payload;
      }
    },
    setGlobalOperation: (state, action: PayloadAction<'AND' | 'OR'>) => {
      state.globalOperation = action.payload;
    },
    clearAllFilters: (state) => {
      state.conditions = [];
    },
  },
});

export const {
  addFilterCondition,
  removeFilterCondition,
  updateFilterCondition,
  setGlobalOperation,
  clearAllFilters,
} = filterSlice.actions;

export default filterSlice.reducer;

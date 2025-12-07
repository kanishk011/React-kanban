import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Task, TaskStatus } from '../../types';
import { dummyTasks } from '../../data/dummyTasks';

interface KanbanState {
  tasks: Task[];
}

const initialState: KanbanState = {
  tasks: dummyTasks,
};

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTaskStatus: (
      state,
      action: PayloadAction<{ taskId: string; newStatus: TaskStatus }>
    ) => {
      const task = state.tasks.find(t => t.id === action.payload.taskId);
      if (task) {
        task.status = action.payload.newStatus;
      }
    },
  },
});

export const { addTask, deleteTask, updateTaskStatus } = kanbanSlice.actions;
export default kanbanSlice.reducer;

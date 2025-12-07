import { useState, useMemo } from 'react';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { updateTaskStatus, deleteTask } from '../kanbanSlice';
import type { Task, TaskStatus } from '../../../types';
import KanbanColumn from './KanbanColumn';
import TaskCard from './TaskCard';
import TaskDetailModal from './TaskDetailModal';
import { filterTasks } from '../../../utils/filterTasks';
import './KanbanBoard.css';

const COLUMNS: { id: TaskStatus; title: string }[] = [
  { id: 'Open', title: 'Open' },
  { id: 'In Progress', title: 'In Progress' },
  { id: 'Review', title: 'Review' },
  { id: 'Done', title: 'Done' },
];

const KanbanBoard = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.kanban.tasks);
  const filterState = useAppSelector((state) => state.filters);

  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  // Apply filters
  const filteredTasks = useMemo(() => {
    return filterTasks(tasks, filterState);
  }, [tasks, filterState]);

  // Organize tasks by column
  const tasksByColumn = useMemo(() => {
    const columns: Record<TaskStatus, Task[]> = {
      Open: [],
      'In Progress': [],
      Review: [],
      Done: [],
    };

    filteredTasks.forEach((task) => {
      if (columns[task.status]) {
        columns[task.status].push(task);
      }
    });

    return columns;
  }, [filteredTasks]);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    // Find task in the full tasks array, not filtered tasks
    const task = tasks.find((t) => t.id === active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Always reset active task state
    setActiveTask(null);

    // Validation 1: Check if dropped over a valid drop zone
    if (!over) {
      // Card was dropped outside any drop zone - it will return to original position
      console.log('Card dropped outside valid drop zone - returning to original position');
      return;
    }

    const taskId = active.id as string;
    const newStatus = over.id as TaskStatus;

    // Validation 2: Verify the drop target is a valid column status
    const validStatuses: TaskStatus[] = ['Open', 'In Progress', 'Review', 'Done'];
    if (!validStatuses.includes(newStatus)) {
      console.warn(`Invalid drop target: ${over.id} - returning card to original position`);
      return;
    }

    // Validation 3: Find the current task to check if status actually changed
    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
      console.error(`Task ${taskId} not found`);
      return;
    }

    // Only update if the status is different (prevents unnecessary updates)
    if (task.status !== newStatus) {
      dispatch(updateTaskStatus({ taskId, newStatus }));
    }
  };

  const handleDragCancel = () => {
    setActiveTask(null);
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <div className="kanban-board">
          {COLUMNS.map((column) => (
            <KanbanColumn
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={tasksByColumn[column.id]}
              onTaskClick={handleTaskClick}
            />
          ))}
        </div>

        <DragOverlay>
          {activeTask ? (
            <TaskCard task={activeTask} onClick={() => {}} />
          ) : null}
        </DragOverlay>
      </DndContext>

      <TaskDetailModal
        task={selectedTask}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDelete={handleDeleteTask}
      />
    </>
  );
};

export default KanbanBoard;

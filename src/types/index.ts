// Task status types
export type TaskStatus = 'Open' | 'In Progress' | 'Review' | 'Done';

// Task tag types
export type TaskTag = 'frontend' | 'backend' | 'design' | 'testing' | 'devops';

// Task interface
export interface Task {
  id: string;
  title: string;
  description: string;
  tag: TaskTag;
  createdAt: string;
  createdBy: string;
  assignee: string;
  estimation: number; // story points
  dueDate: string;
  status: TaskStatus;
}

// Filter operation types
export type FilterOperation = 'AND' | 'OR' | 'NOT';

// Filter condition interface
export interface FilterCondition {
  id: string;
  field: 'assignee' | 'tag';
  values: string[];
  operation: FilterOperation;
}

// Filter state interface
export interface FilterState {
  conditions: FilterCondition[];
  globalOperation: 'AND' | 'OR';
}

// Column interface for Kanban board
export interface Column {
  id: TaskStatus;
  title: string;
  tasks: Task[];
}

import type { Task, FilterCondition, FilterState } from '../types';

/**
 * Apply a single filter condition to tasks
 */
function applyCondition(tasks: Task[], condition: FilterCondition): Task[] {
  const { field, values, operation } = condition;

  if (operation === 'NOT') {
    return tasks.filter(task => !values.includes(task[field]));
  }

  // For AND and OR at condition level, they work the same - task must match one of the values
  return tasks.filter(task => values.includes(task[field]));
}

/**
 * Filter tasks based on multiple filter conditions and global operation
 */
export function filterTasks(tasks: Task[], filterState: FilterState): Task[] {
  const { conditions, globalOperation } = filterState;

  if (conditions.length === 0) {
    return tasks;
  }

  if (globalOperation === 'AND') {
    // All conditions must be satisfied
    let filteredTasks = tasks;
    for (const condition of conditions) {
      filteredTasks = applyCondition(filteredTasks, condition);
    }
    return filteredTasks;
  } else {
    // OR: At least one condition must be satisfied
    const resultSets = conditions.map(condition => applyCondition(tasks, condition));

    // Combine all results and remove duplicates
    const combined = resultSets.flat();
    const uniqueTasks = Array.from(
      new Map(combined.map(task => [task.id, task])).values()
    );

    return uniqueTasks;
  }
}

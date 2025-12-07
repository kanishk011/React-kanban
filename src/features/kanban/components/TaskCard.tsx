import type { Task } from '../../../types';
import './TaskCard.css';

interface TaskCardProps {
  task: Task;
  onClick: () => void;
}

const TaskCard = ({ task, onClick }: TaskCardProps) => {
  const getTagColor = (tag: Task['tag']): string => {
    const colors: Record<Task['tag'], string> = {
      frontend: '#3b82f6',
      backend: '#10b981',
      design: '#f59e0b',
      testing: '#8b5cf6',
      devops: '#ef4444',
    };
    return colors[tag];
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="task-card" onClick={onClick}>
      <div className="task-card-header">
        <h3 className="task-card-title">{task.title}</h3>
        <span
          className="task-card-tag"
          style={{ backgroundColor: getTagColor(task.tag) }}
        >
          {task.tag}
        </span>
      </div>

      <div className="task-card-info">
        <div className="task-card-info-item">
          <span className="info-label">Due:</span>
          <span className="info-value">{formatDate(task.dueDate)}</span>
        </div>
        <div className="task-card-info-item">
          <span className="info-label">Assignee:</span>
          <span className="info-value">{task.assignee}</span>
        </div>
        <div className="task-card-info-item">
          <span className="info-label">Points:</span>
          <span className="info-value">{task.estimation}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

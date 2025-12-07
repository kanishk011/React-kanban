import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, TrashIcon } from '@radix-ui/react-icons';
import type { Task } from '../../../types';
import './TaskDetailModal.css';

interface TaskDetailModalProps {
  task: Task | null;
  open: boolean;
  onClose: () => void;
  onDelete: (taskId: string) => void;
}

const TaskDetailModal = ({ task, open, onClose, onDelete }: TaskDetailModalProps) => {
  if (!task) return null;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleDelete = () => {
    onDelete(task.id);
    onClose();
  };

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <div className="dialog-header">
            <Dialog.Title className="dialog-title">{task.title}</Dialog.Title>
            <Dialog.Close asChild>
              <button className="icon-button" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </div>

          <div className="dialog-body">
            <div className="detail-section">
              <label className="detail-label">Description</label>
              <p className="detail-description">{task.description}</p>
            </div>

            <div className="detail-grid">
              <div className="detail-section">
                <label className="detail-label">Tag</label>
                <span className="detail-tag" data-tag={task.tag}>
                  {task.tag}
                </span>
              </div>

              <div className="detail-section">
                <label className="detail-label">Status</label>
                <span className="detail-value">{task.status}</span>
              </div>

              <div className="detail-section">
                <label className="detail-label">Assignee</label>
                <span className="detail-value">{task.assignee}</span>
              </div>

              <div className="detail-section">
                <label className="detail-label">Created By</label>
                <span className="detail-value">{task.createdBy}</span>
              </div>

              <div className="detail-section">
                <label className="detail-label">Estimation</label>
                <span className="detail-value">{task.estimation} points</span>
              </div>

              <div className="detail-section">
                <label className="detail-label">Due Date</label>
                <span className="detail-value">{formatDate(task.dueDate)}</span>
              </div>

              <div className="detail-section">
                <label className="detail-label">Created At</label>
                <span className="detail-value">{formatDateTime(task.createdAt)}</span>
              </div>
            </div>
          </div>

          <div className="dialog-footer">
            <button className="button button-delete" onClick={handleDelete}>
              <TrashIcon />
              Delete Task
            </button>
            <Dialog.Close asChild>
              <button className="button button-secondary">Close</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default TaskDetailModal;

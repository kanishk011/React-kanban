import { useState, type FormEvent } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, PlusIcon } from '@radix-ui/react-icons';
import { useAppDispatch } from '../../../app/hooks';
import { addTask } from '../kanbanSlice';
import type { Task, TaskStatus, TaskTag } from '../../../types';
import { assignees, tags } from '../../../data/dummyTasks';
import './CreateTaskForm.css';

const CreateTaskForm = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tag: 'frontend' as TaskTag,
    assignee: assignees[0],
    createdBy: '',
    estimation: 1,
    dueDate: '',
    status: 'Open' as TaskStatus,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    dispatch(addTask(newTask));

    // Reset form
    setFormData({
      title: '',
      description: '',
      tag: 'frontend',
      assignee: assignees[0],
      createdBy: '',
      estimation: 1,
      dueDate: '',
      status: 'Open',
    });

    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="button button-primary">
          <PlusIcon />
          Create Task
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <div className="dialog-header">
            <Dialog.Title className="dialog-title">Create New Task</Dialog.Title>
            <Dialog.Close asChild>
              <button className="icon-button" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="dialog-body">
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Title *
              </label>
              <input
                id="title"
                type="text"
                className="form-input"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                placeholder="Enter task title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Description *
              </label>
              <textarea
                id="description"
                className="form-textarea"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                placeholder="Enter task description"
                rows={4}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="tag" className="form-label">
                  Tag *
                </label>
                <select
                  id="tag"
                  className="form-select"
                  value={formData.tag}
                  onChange={(e) => setFormData({ ...formData, tag: e.target.value as TaskTag })}
                  required
                >
                  {tags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="status" className="form-label">
                  Status *
                </label>
                <select
                  id="status"
                  className="form-select"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as TaskStatus })}
                  required
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Review">Review</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="assignee" className="form-label">
                  Assignee *
                </label>
                <select
                  id="assignee"
                  className="form-select"
                  value={formData.assignee}
                  onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
                  required
                >
                  {assignees.map((assignee) => (
                    <option key={assignee} value={assignee}>
                      {assignee}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="createdBy" className="form-label">
                  Created By *
                </label>
                <input
                  id="createdBy"
                  type="text"
                  className="form-input"
                  value={formData.createdBy}
                  onChange={(e) => setFormData({ ...formData, createdBy: e.target.value })}
                  required
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="estimation" className="form-label">
                  Estimation (points) *
                </label>
                <input
                  id="estimation"
                  type="number"
                  className="form-input"
                  value={formData.estimation}
                  onChange={(e) => setFormData({ ...formData, estimation: parseInt(e.target.value) })}
                  required
                  min="1"
                  max="13"
                />
              </div>

              <div className="form-group">
                <label htmlFor="dueDate" className="form-label">
                  Due Date *
                </label>
                <input
                  id="dueDate"
                  type="date"
                  className="form-input"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="dialog-footer">
              <Dialog.Close asChild>
                <button type="button" className="button button-secondary">
                  Cancel
                </button>
              </Dialog.Close>
              <button type="submit" className="button button-primary">
                Create Task
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CreateTaskForm;

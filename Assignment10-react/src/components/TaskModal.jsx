import React, { useState, useEffect } from 'react';
// import './styles.css';

const TaskModal = ({ show, onHide, onSave, task }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    status: 'New',
    priority: 'Low',
    creationDate: new Date().toISOString().slice(0, 10),
    completionDate: '',
  });

  useEffect(() => {
    if (task) {
      // If editing a task, set the task data
      setTaskData(task);
    } else {
      // Reset to default values for adding a new task
      setTaskData({
        title: '',
        description: '',
        status: 'New',
        priority: 'Low',
        creationDate: new Date().toISOString().slice(0, 10),
        completionDate: '',
      });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(taskData);
    onHide();
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{task ? 'Edit Task' : 'Create Task'}</h2>
        <div className="modal-body">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={taskData.title}
            onChange={handleChange}
            required
          />
          <label>Description</label>
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            rows={3}
            required
          />
          <label>Priority</label>
          <select name="priority" value={taskData.priority} onChange={handleChange}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          {task && task.status === 'Completed' && (
            <>
              <label>Completion Date</label>
              <input
                type="date"
                name="completionDate"
                value={taskData.completionDate}
                onChange={handleChange}
              />
            </>
          )}
        </div>
        <div className="modal-footer">
          <button onClick={onHide} className='close-task-btn'>Cancel</button>
          <button onClick={handleSubmit} className='add-task-btn'>{task ? "Update Task" : "Add Task"}</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
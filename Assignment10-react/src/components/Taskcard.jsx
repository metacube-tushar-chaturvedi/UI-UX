import React from 'react';
// import './styles.css';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const priorityColors = {
    High: '#f28b82',
    Medium: '#fbbc04',
    Low: '#ccff90',
  };

  return (
    <div className="task-card" style={{ backgroundColor: priorityColors[task.priority] }}>
      <div className="task-card-header">
        <p className='task_card_title'>{task.title}</p>
      </div>
      <div className="task-card-body">
        <p className='task_card_description'>{task.description}</p>
        <div style={{ display: 'flex', justifyContent:'space-between'}}>
        <p><strong>Priority:</strong> {task.priority}</p>
        <p><strong>Creation Date:</strong> {task.creationDate}</p>
        </div>
        {task.status === 'Completed' && (
          <p><strong>Completion Date:</strong> {task.completionDate}</p>
        )}
      </div>
      <div className="task-card-footer">
        <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
        {task.status !== 'Completed' && (
          <button className="edit-btn" onClick={() => onEdit(task)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;


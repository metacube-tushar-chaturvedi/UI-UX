import React from 'react';
// import './styles.css';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const priorityColors = {
    High: '#ebcccc',
    Medium: '#e7f6e8',
    Low: '#e7f2f6',
  };
  const borderColors = {
    High: '#af3333',
    Medium: '#09550c',
    Low: '#127aa9',
  };

  return (
    <div className="task-card" style={{ backgroundColor: priorityColors[task.priority] , borderColor: borderColors[task.priority], borderWidth: "2px"}}>
      <div className="task-card-header">
        <p className='task_card_title'>{task.title}</p>
      </div>
      <div className="task-card-body">
        <p className='task_card_description'>{task.description}</p>
        <div style={{ display: 'flex', justifyContent:'space-between'}}>
        <p><strong>Priority:</strong> <span className='small-p-text'>{task.priority}</span></p>
        <p><strong>Creation Date:</strong> <span className='small-p-text'>{task.creationDate}</span></p>
        </div>
        {task.status === 'Completed' && (
          <p><strong>Completion Date:</strong> <span className='small-p-text'>{task.completionDate}</span></p>
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


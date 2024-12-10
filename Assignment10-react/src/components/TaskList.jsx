import React from 'react';
import TaskCard from './Taskcard.jsx';
// import './styles.css';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    const groupedTasks = tasks.reduce((groups, task) => {
      if (!groups[task.status]) groups[task.status] = [];
      groups[task.status].push(task);
      return groups;
    }, {});

    // Define the statuses you want to display
    const statuses = ['New', 'In_Progress', 'Completed'];

    return (
      <div className="task-list">
        {statuses.map((status) => (
          <div key={status} className="task-group">
            <h3 className={`${status}`}>{status}</h3>
            {groupedTasks[status] && groupedTasks[status].length > 0 ? (
              groupedTasks[status].map((task) => (
                <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
              ))
            ) : (
              <p className='no_tasks'>No tasks available</p> // Message when there are no tasks
            )}
          </div>
        ))}
      </div>
    );
  };


export default TaskList;
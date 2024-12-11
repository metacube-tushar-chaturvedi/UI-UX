import React from 'react';
import TaskCard from './TaskCard.jsx';

const TaskList = ({ tasks, onEdit, onDelete, onStatusChange }) => {
    const groupedTasks = tasks.reduce((groups, task) => {
        if (!groups[task.status]) groups[task.status] = [];
        groups[task.status].push(task);
        return groups;
    }, {});

    const statuses = ['New', 'In-Progress', 'Completed'];

    const handleDrop = (event, status) => {
        event.preventDefault();
        const taskId = event.dataTransfer.getData('text/plain');
        onStatusChange(parseInt(taskId), status);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDragStart = (event, taskId) => {
        event.dataTransfer.setData('text/plain', taskId);
    };

    return (
        <div className="task-list">
            {statuses.map((status) => (
                <div
                    key={status}
                    className="task-group"
                    onDrop={(event) => handleDrop(event, status)}
                    onDragOver={handleDragOver}
                >
                    <h3 className={`${status}`}>{status}</h3>
                    {groupedTasks[status] && groupedTasks[status].length > 0 ? (
                        groupedTasks[status].map((task) => (
                          <div
                          key={task.id}
                          draggable
                          onDragStart={(event) => handleDragStart(event, task.id)}
                      >
                          <TaskCard task={task} onEdit={onEdit} onDelete={onDelete} />
                      </div>
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

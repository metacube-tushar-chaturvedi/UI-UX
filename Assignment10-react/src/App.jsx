import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.jsx';
import TaskModal from './components/TaskModal.jsx';
import './styles.css';

const App = () => {
  // Retrieve existing tasks from localStorage
  const storedTasks = localStorage.getItem("tasks");
  const existingTasks = storedTasks ? JSON.parse(storedTasks) : []; // Check if storedTasks is not null
  const [tasks, setTasks] = useState(existingTasks);

  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleSave = (task) => {
    if (task.id) {
      setCurrentTask(null);
      setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));
    } else {
      setCurrentTask(null);
      setTasks((prev) => [...prev, { ...task, id: Date.now() }]);
    }
  };

   // Optional: useEffect to sync tasks with localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleEdit = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  const handleAddTask = () => {
    setCurrentTask(null); // Reset currentTask for adding a new task
    setShowModal(true); // Open the modal for adding a new task
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <div className='mainNav'>
        <h1 style={{marginTop:'0'}}>Task Manager</h1>
        <button className="add-task-btn" onClick={handleAddTask}>
        Add Task
        </button>
      </div>
      {localStorage.setItem("tasks", JSON.stringify(tasks))}
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
      <TaskModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={handleSave}
        task={currentTask}
      />
    </div>
  );
};

export default App;
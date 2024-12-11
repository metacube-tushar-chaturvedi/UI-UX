import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.jsx';
import TaskModal from './components/TaskModal.jsx';
import './styles.css';

const App = () => {
  const storedTasks = localStorage.getItem("tasks");
  const existingTasks = storedTasks ? JSON.parse(storedTasks) : [];
  const [tasks, setTasks] = useState(existingTasks);
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleSave = (task) => {
    if (task.id) {
      setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks((prev) => [...prev, { ...task, id: Date.now() }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleEdit = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  const handleAddTask = () => {
    setCurrentTask(null);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleStatusChange = (taskId, newStatus) => {
    const currentDate = new Date().toLocaleString();
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? {
          ...task,
          status: newStatus,
          completionDate: newStatus === 'Completed' ? currentDate : task.completionDate, // Set completionDate if status is 'Completed'
        }: task
      )
    );
  };

  return (
    <div className="app">
      <div className='mainNav'>
        <h1 style={{ marginTop: '0', color:'white' }}>Task Manager</h1>
        <button className="add-task-btn" onClick={handleAddTask}>
          New Task
        </button>
      </div>
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} onStatusChange={handleStatusChange} />
      <TaskModal
        show={showModal}
        onHide={() => {setShowModal(false); setCurrentTask(null); }}
        onSave={handleSave}
        task={currentTask}
      />
    </div>
  );
};

export default App;

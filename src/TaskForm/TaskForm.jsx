import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addTask, updateTask } from '../TaskSlice/TaskSlice';

function TaskForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const tasks = useSelector(state => state.tasks);
  const task = tasks.find(task => task.id === id);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateTask({ id, title }));
    } else {
      dispatch(addTask({ id: Date.now(), title }));
    }
    navigate('/');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Task' : 'Add Task'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border p-2 mt-1 w-full"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">{id ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
}

export default TaskForm;

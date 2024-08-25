import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import TaskDetail from '../TaskDetail/TaskDetail';

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
        <Route path="/details/:id" element={<TaskDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

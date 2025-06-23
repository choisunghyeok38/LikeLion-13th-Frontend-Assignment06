import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">리스트</Link> | <Link to="/add">추가</Link>
      </nav>
      <Routes>
        <Route path="/" element={<TodoList />}/>
        <Route path="/add" element={<AddTodo />}/>
      </Routes>
    </Router>
  );
}

export default App;
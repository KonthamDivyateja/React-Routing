import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Todos from './pages/Todos';
import TodoDetails from './pages/TodoDetails';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Unprotected Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/todos" element={
          <PrivateRoute>
            <Todos />
          </PrivateRoute>
        } />
        <Route path="/todos/:todoId" element={
          <PrivateRoute>
            <TodoDetails />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/auth/Login.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

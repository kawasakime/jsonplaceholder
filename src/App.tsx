import User from './pages/User';
import Users from './pages/Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/user/:id' element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

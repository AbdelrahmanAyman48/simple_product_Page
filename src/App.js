import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto p-2 bg-gray-50 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:slug" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

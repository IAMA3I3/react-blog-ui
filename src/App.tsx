import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import { Header } from './components/Header';

function App() {
  return (
    <div className=' bg-slate-100 h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

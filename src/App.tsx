import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className=' bg-slate-100'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

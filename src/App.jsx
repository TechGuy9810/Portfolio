import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
import Layout from './Layout/Layout';
import Home from './components/Home';

const Project = React.lazy(() => import('./components/Project'));
const About = React.lazy(() => import('./components/About'));

function App() {
  return (
    <div className='App cursor-fancy'>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import { Container, Navbar } from './component/layout';
import { Home } from './routes/home';
import { Projects } from './routes/projects';
import { About } from './routes/about';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route
          element={
            <>
              <Navbar />
              <Container />
            </>
          }
        >
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

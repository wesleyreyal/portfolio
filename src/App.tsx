import { Route, Routes } from 'react-router-dom';
import { Container, Navbar } from './component/layout';

import './App.css';
import { Projects, Home, About } from './routes';

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

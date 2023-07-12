import { Route, Routes } from 'react-router-dom';
import { Container, Navbar } from './component/layout';

import './App.css';
import { Projects, Home, About, Resume } from './routes';

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
          <Route path='/resume' element={<Resume />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

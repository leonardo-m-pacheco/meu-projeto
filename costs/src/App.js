import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Newproject from './components/pages/Newproject';
import Navbar from './components/pages/layouts/Navbar';
import Footer from './components/pages/layouts/Footer';

import Projects from './components/pages/Projects';

import Container from './components/pages/layouts/Container';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Container customclass="min-height">
      <Routes>
        <Route>
          
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<Newproject />} />
        </Route>
      </Routes>
      
      </Container>
      <Footer />
    </BrowserRouter>

  );

}

export default App;

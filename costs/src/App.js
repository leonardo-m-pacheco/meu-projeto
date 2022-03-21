import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Newproject from './components/pages/Newproject';

import Container from './components/pages/layouts/Container'

function App() {
  return (

    <BrowserRouter>
      <div>
        <ul >
          <li><Link to="/">Componente Home Page</Link></li>
          <li><Link to="/company">Componente Company</Link></li>
          <li><Link to="/contact">Componente Contact</Link></li>
        </ul>
      </div>
      <Container>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<Newproject />} />
        </Route>
      </Routes>
      </Container>
<p>Eu sou o footer</p>
    </BrowserRouter>

  );

}

export default App;

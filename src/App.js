
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/portfolio';



function App() {
  return (
    
    console.log('Rendering Layout component'),
    

    <Routes>
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='home'element={<Home />} />

    <Route path='about'element={<About />} />
    <Route path='contact'element={<Contact />} />
    <Route path='tasks'element={<Portfolio />} />

    
    
    </Route>
</Routes>

  );
}

export default App;

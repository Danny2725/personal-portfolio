import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import {Projects} from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
function App() {
  return (
    <div className="App"> 
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
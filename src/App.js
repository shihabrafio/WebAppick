import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Firstpage } from './components/firstpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Firstpage/>
    </div>
  );
}

export default App;

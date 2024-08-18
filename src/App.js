import './App.css';
import Navbar from './components/navbar';
import { Firstpage } from './components/firstpage';
import { Secondpage } from './components/secondpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Firstpage/>
      <Secondpage/>
    </div>
  );
}

export default App;

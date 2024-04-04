import './App.css';
import Header from "./components/Header"
import BenefitsDescription from './components/BenefitsDescription';
import CMS from "./components/CMS"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BenefitsDescription></BenefitsDescription>
      <CMS></CMS>
    </div>
  );
}

export default App;

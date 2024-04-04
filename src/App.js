import './App.css';
import Header from "./components/Header"
import BenefitsDescription from './components/BenefitsDescription';
import CMS from "./components/CMS"
import RealTimeShowCase from './components/RealTimeShowCase';
import CompanyStatus from './components/CompanyStatus';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BenefitsDescription></BenefitsDescription>
      <CMS></CMS>
      <RealTimeShowCase></RealTimeShowCase>
      <CompanyStatus></CompanyStatus>
    </div>
  );
}

export default App;

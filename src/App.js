import './App.css';
import Header from "./components/Header"
import BenefitsDescription from './components/BenefitsDescription';
import CMS from "./components/CMS"
import RealTimeShowCase from './components/RealTimeShowCase';
import CompanyStatus from './components/CompanyStatus';
import Testimonals from './components/Testimonals';
import TimeLine from "./components/Timeline"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BenefitsDescription></BenefitsDescription>
      <CMS></CMS>
      <RealTimeShowCase></RealTimeShowCase>
      <CompanyStatus></CompanyStatus>
      <TimeLine></TimeLine>
      <Testimonals></Testimonals>
    </div>
  );
}

export default App;

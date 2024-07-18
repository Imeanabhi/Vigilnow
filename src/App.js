import Header from './components/Header/Header'
import ErrorMonitoring from './components/ErrorMonitoring/ErrorMonitoring.jsx';
import './App.css';
import { BrowserRouter as Router, Routes, Route,/*Switch*/} from 'react-router-dom';
import Homepage from './components/HomePage/Homepage.jsx';
//import CreateAcc from './components/CreateAcc/CreateAcc.jsx';
import HealthCheck from './components/HealthCheck/HealthCheck.jsx';
import JobMonitoring from './components/JobMonitoring/JobMonitoring.jsx';
import APIMonitoring from './components/APIMonitoring/APIMonitoring.jsx';
import Manager from './components/Manager/Manager.jsx';
import DevelopmentTeams from './components/DevelopmentTeams/DevelopmentTeams.jsx';
import Resources from './components/Resources/Resources.jsx';
import Privacy from './components/Privacy-Policy/Privacy.jsx';
import Terms from './components/Terms/Terms.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Boosting from './components/Blogs/Boosting/Boosting.jsx';
import FullStack from './components/Blogs/FullStack/FullStack.jsx';
//import TrustedComp from './components/TrustedComp/TrustedComp.jsx';
import Streamline from './components/Blogs/Streamline/Streamline.jsx';
import Operational from './components/Blogs/Operational/Operational.jsx';
  
function App() {
  return (
  
  <div>
  <Router>
    <Header/>
    
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path="/error-monitoring"element={<ErrorMonitoring/>}/>
    <Route path="/health-checks"element={<HealthCheck/>}/>
    <Route path="/job-monitoring"element={<JobMonitoring/>}/>
    <Route path="/api-monitoring"element={<APIMonitoring/>}/>
    <Route path="/manager"element={<Manager/>}/>
    <Route path="/development-teams"element={<DevelopmentTeams/>}/>
    <Route path="/resources"element={<Resources/>}/>
    <Route path="/privacy-policy" element={<Privacy/>}/>
    <Route path="/Terms" element={<Terms/>}/>
    <Route path='/boosting-application-reliability' element={<Boosting/>}/>
    <Route path='/maximizing-full-stack-monitoring-efficiency' element={<FullStack/>}/>
    <Route path='/streamlining-full-stack-application-error-monitoring' element={<Streamline/>}/>
    <Route path='/enhancing-operational-efficiency-with-vigils' element={<Operational/>}/>
  </Routes>
</Router>
</div>
  );
}

export default App;

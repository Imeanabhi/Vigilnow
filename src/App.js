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
//import TrustedComp from './components/TrustedComp/TrustedComp.jsx';
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
    <Route path="/development-teamss"element={<DevelopmentTeams/>}/>
    <Route path="/resources"element={<Resources/>}/>






  </Routes>
</Router>
</div>
  );
}

export default App;

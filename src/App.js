
import './App.css';
import NavBar from './Components/NavBar';

import { BrowserRouter , Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import TermsAndConditionsPage from './Pages/T&CPage';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path='/about' element={<AboutUsPage/>}/>
      <Route exact path='privacyPolicy' element= {<TermsAndConditionsPage/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;

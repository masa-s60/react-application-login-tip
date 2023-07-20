import LogIn from './components/Pages/login';
import TipApplication from './components/Pages/tip-application';
import { useAuthContext, AuthProvider } from './Context/auth-context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  
  return (
    <AuthProvider>
      <div className='hero is-fullheight background-gradation'>
        <div className='hero-body level-item'>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={LogIn}/>
              <Route path="/tipApp" Component={TipApplication}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

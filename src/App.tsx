import Login from './components/Pages/login';
import TipApplication from './components/Pages/tip-application';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {

  return (
      <div className='hero is-fullheight background-gradation'>
        <div className='hero-body level-item'>
          <RecoilRoot>
            <BrowserRouter basename="/masa-s60">
              <Routes>
                <Route path="/" Component={Login}/>
                <Route path="/tipApp" Component={TipApplication}/>
              </Routes>
            </BrowserRouter>
          </RecoilRoot>
        </div>
      </div>
  );
}

export default App;

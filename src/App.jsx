import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './styles/responsiveStyles/ResponsiveStyle.css';
import { useState } from 'react';

function App() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className='container'>
        <div className="components">
          <Header navbar={navbar} setNavbar={setNavbar} />
          <Sidebar navbar={navbar} setNavbar={setNavbar} />
          <DashboardMainContent />
        </div>
      </div>
    </>
  )
}

export default App;

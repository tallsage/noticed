import './App.css';
import FirstFrame from './components/firstFrame/FirstFrame';
import Client from './components/client/Client';
import Admin from './components/admin/Admin'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FirstFrame/>}/>
        <Route exact path='/admin' element={<Admin/>}/>
        <Route exact path='/client' element={<Client/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
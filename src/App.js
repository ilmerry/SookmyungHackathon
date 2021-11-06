import './App.css';

import StartPage from './Components/StartPage';
import SelectPage from './Components/SelectPage';
import ResultPage from './Components/ResultPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    
    <StartPage/>
      <Routes>
        
        <Route path="/" exact element={<StartPage/>}/>
        <Route path="/select" element={<SelectPage/>}/>
        <Route path="/result" element={<ResultPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

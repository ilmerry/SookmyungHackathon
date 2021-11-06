import './App.css';
import React from 'react';
import StartPage from './Components/StartPage';
import SelectPage from './Components/SelectPage';
import ResultPage from './Components/ResultPage';
import SelectAbout from './Components/SelectAbout';
import SelectNum from './Components/SelectNum';
import SelectLang  from './Components/SelectLang';
import SelectOthers from './Components/SelectOthers';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = ()=>{
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<StartPage/>}/>
        <Route path="/select" element={<SelectPage/>}/>
        <Route path="/result" element={<ResultPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;

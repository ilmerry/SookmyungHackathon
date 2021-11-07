import './App.css';
import React from 'react';
import StartPage from './Components/StartPage';
import ResultPage from './Components/ResultPage';
import SelectNum from './Components/SelectNum';
import SelectLang  from './Components/SelectLang';
import SelectOthers from './Components/SelectOthers';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = ()=>{
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StartPage />}/>
        <Route path="/maxlen" element={<SelectNum/>}/>
        <Route path="/language" element={<SelectLang/>}/>
        <Route path="/others" element={<SelectOthers/>}/>
        <Route path="/result" element={<ResultPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;

import './App.css';

import StartPage from './Components/StartPage';
import ResultPage from './Components/ResultPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    
    <StartPage/>
      <Routes>
        
        <Route path="/" exact component={StartPage}/>
        <Route path="/result" component={ResultPage}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

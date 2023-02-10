import {BrowserRouter as Router, Route, Routes} from  'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header></Header>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;

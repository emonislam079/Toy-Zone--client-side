
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Toys from './Components/Toys/Toys';
import Home from './Components/Home/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
        <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/toys">
              <Toys></Toys>
            </Route>
          
            </Switch>
            </Router>
      
    </div>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Toys from './Components/Toys/Toys';
import Home from './Components/Home/Home/Home';
import AuthProvider from './Contex/AuthProvider/AuthProvider';
import PrivateRoute from './Components/LogIn/PrivetRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            </AuthProvider>
      
    </div>
  );
}

export default App;

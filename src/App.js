
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Toys from './Components/Toys/Toys';
import Home from './Components/Home/Home/Home';
import AuthProvider from './Contex/AuthProvider/AuthProvider';
import PrivateRoute from './Components/LogIn/PrivetRoute/PrivateRoute';
import Header from './Components/Shared/Header/Header';
import Register from './Components/LogIn/Register/Register';
import LogIn from './Components/LogIn/LogIn';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
              <Home></Home>
          </Route>

          <Route path="/toys">
              <Toys></Toys>
            </Route>
          <Route path="/register">
              <Register></Register>
            </Route>
          <Route path="/login">
              <LogIn></LogIn>
            </Route>
          
            </Switch>
            </Router>
            </AuthProvider>
      
    </div>
  );
}

export default App;

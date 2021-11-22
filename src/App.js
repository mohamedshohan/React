import logo from './logo.svg';
import './App.css';
import {Header} from './components/Home';
import Navbar from './components/Nav';
import Pay from './components/Payement';
import Main from './components/main';
import "bootstrap/dist/css/bootstrap.css";
import Cont from './components/contact';
import Count from './components/counter';
import Demo from './components/demo';
import axios from 'axios';
import Ajax from './components/Ajax';
import About from './components/About';
import Details from './components/Details';
import Login from './components/login';
import CusReg from './components/customerreg';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import BalTable from './components/Balance';
import Customer from './components/customer';
import AddCustomer from './components/addcustomer';
import UpdateCus from './components/updatecustomer';

function App() {
  return (
  //   <div>
  //     <Cont name="student"/>
  //     <br/>
  //     <Cont name="teacher"/>
  //     <br/>
  //     <Count/>
  //     <Demo/>
  //     <Ajax/>
  //  </div>
  <Router>
    <div>
      <Navbar/>
      <CusReg/>
    
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>

      </ul>
    </div>

    <Switch>
      <Route exact path="/">
        <Header/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/details">
        <Details/>
      </Route>
      <Route path="/balance" component={Main} />
      <Route path="/getCustomers" component={Customer}/>
      <Route path="/addCustomer" component={AddCustomer}/>
      <Route path="/customer/update/:cid" component={UpdateCus}/>
      <Route path="/login" component={Login} />
    </Switch>

  </Router>
   
  );
}

export default App;

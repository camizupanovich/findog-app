import './App.css';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import Landing from '../src/Components/Presentationals/LandingPage/Landing';
import Dog from './Components/Presentationals/DogDetail/Dog';
import About from './Components/Presentationals/About/About';
import Contact from './Components/Presentationals/Contact/Contact';
import Loader from './Components/Loader/Loader'
import Create from './Components/Presentationals/Create/Create';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
      <Route  exact path='/'component={Landing}/> 
      <Route exact path='/dogs' component={Home}/>
      <Route exact path='/dogs/:id' component={Dog}/>
      <Route path = '/about' component={About}/>
      <Route path= '/contact' component={Contact}/>
      <Route path='/loader' component={Loader}/>
       <Route exact path= '/create' component={Create}/> 
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

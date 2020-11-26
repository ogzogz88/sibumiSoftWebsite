import './App.css';
import Home from './pages/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignInPage from './pages/signin';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={SignInPage} />
      </Switch>
    </Router>
  );
}

export default App;

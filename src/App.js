import './App.css';
import Home from './pages/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignInPage from './pages/signin';
import { ModalProvider } from 'styled-react-modal';



function App() {
  return (
    <ModalProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={SignInPage} />
        </Switch>
      </Router>
    </ModalProvider>
  );
}

export default App;

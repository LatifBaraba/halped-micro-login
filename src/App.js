import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Login from './pages/login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"/>
        </Route>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;

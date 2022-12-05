import { Route, Switch } from 'react-router-dom';
import './App.css';
import UserDetails from './pages/UserDetails';
import Users from './pages/Users';

function App() {
  return (
    <Switch>
      <Route path='/details' component={UserDetails} />
      <Route path='/' component={Users} />
    </Switch>
  );
}

export default App;

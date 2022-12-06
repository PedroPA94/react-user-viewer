import { Route, Switch } from "react-router-dom";
import "./App.css";
import UserDetails from "./pages/UserDetails/UserDetails";
import Users from "./pages/Users/Users";

function App() {
	return (
		<Switch>
			<Route path='/details/:id' component={UserDetails} />
			<Route path='/' component={Users} />
		</Switch>
	);
}

export default App;

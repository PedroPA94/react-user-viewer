import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Route, Router } from "react-router-dom";
import React from "react";

const renderWithRouter = (component, initialRoute = "/", path = "/") => {
	const history = createMemoryHistory( {initialEntries: [initialRoute]});
	return ({
		...render(
			<Router history={history}>
				<Route path={path}>{ component }</Route>
			</Router>),
		history,
	});
};

export default renderWithRouter;
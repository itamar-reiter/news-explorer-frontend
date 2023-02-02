import React from "react";
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, loggedIn, redirectedPath, changeDirectionState, ...props }) {
  console.log(loggedIn);
  changeDirectionState();
  return (
    <Route {...props}>
      {loggedIn ? children : <Redirect to={redirectedPath} />}
    </Route>
  )
}

export default ProtectedRoute;
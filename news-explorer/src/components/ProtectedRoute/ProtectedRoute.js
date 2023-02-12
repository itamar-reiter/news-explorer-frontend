import React, {useEffect} from "react";
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, loggedIn, redirectedPath, changeDirectionState, ...props }) {
  useEffect(() => {
    changeDirectionState();
  }, [changeDirectionState]);
  console.log(children);
  console.log(loggedIn);
  return (
    <Route {...props}>
      {loggedIn === true &&  children} 
      {loggedIn === false && <Redirect to={redirectedPath} />}
    </Route>
  )
}

export default ProtectedRoute;
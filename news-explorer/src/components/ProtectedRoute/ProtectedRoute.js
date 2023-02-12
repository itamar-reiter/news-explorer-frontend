import React, {useState, useEffect } from "react";
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, loggedIn, redirectedPath, changeDirectionState, ...props }) {
  const [isRouteLoading, setIsRouteLoading] = useState(true);

  useEffect(() => {
    changeDirectionState();
    if (loggedIn !== undefined) {
      setIsRouteLoading(false);
    }
  }, [changeDirectionState, loggedIn]);

  return (
    <>
    {isRouteLoading ? <p>Loading...</p>
    :<Route {...props}>
      {loggedIn === true && children}
      {loggedIn === false && <Redirect to={redirectedPath} />}
    </Route>
  }
    </>
  )
}

export default ProtectedRoute;
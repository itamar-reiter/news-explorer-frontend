import React, {useState, useEffect } from "react";
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, loggedIn, redirectedPath, changeDirectionState, ...props }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    changeDirectionState();
    if (loggedIn !== undefined) {
      setIsLoading(false);
    }
  }, [changeDirectionState, loggedIn]);
  
  return (
    <>
    {isLoading ? <p>Loading...</p>
    :<Route {...props}>
      {loggedIn === true && children}
      {loggedIn === false && <Redirect to={redirectedPath} />}
    </Route>
  }
    </>
  )
}

export default ProtectedRoute;
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';

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
        :
        <Routes>
          <Route {...props}>
            {loggedIn === true && children}
            {loggedIn === false && <Navigate to={redirectedPath} />}
          </Route>
        </Routes>
      }
    </>
  )
}

export default ProtectedRoute;
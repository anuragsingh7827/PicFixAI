import RestorePhoto from './components/restorePhoto/RestorePhoto';
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";
import DiologueBox from "./components/diologueBox/DiologueBox.js";
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from './components/loginPage/LoginPage';


function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const response = await fetch(url, { credentials: 'include' });
      const data = await response.json();
      setIsAuthenticated(true);
      setUser(data.user._json);

    } catch (err) {
      setIsAuthenticated(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="App">
        <Navbar open={open} setOpen={setOpen} user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
        <DiologueBox open={open} setOpen={setOpen} user={user} setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route
            exact
            path="/"
            element={<LandingPage open={open} setOpen={setOpen} />}
          />
          {
            isAuthenticated ? (<Route
              exact
              path="/restore"
              element={< RestorePhoto />}
            />) : (<Route
              exact
              path="/"
              element={<LandingPage open={open} setOpen={setOpen} />}

            />)
          }
          {
            !user && <Route
              exact
              path="/login"
              element={<LoginPage />}
            />
          }
        </Routes>
      </div>
    </>
  );
}
export default App;
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NewRoom from "./Pages/NewRoom";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/" exact component={Home} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

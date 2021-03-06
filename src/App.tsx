import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AdminRoom from "./Pages/AdminRoom";
import AuthContextProvider from "./Context/AuthContext";
import Home from "./Pages/Home";
import NewRoom from "./Pages/NewRoom";
import Room from "./Pages/Room";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

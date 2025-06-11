import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import LoginLayout from "./layouts/login-layout.jsx";
import AppLayout from "./layouts/app-layout";
import Warhouse from "./components/warhouse";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="/warhouse" element={<Warhouse />} />
          {/* <Route path="/billing" element={<BillingPage />} />
          <Route path="/server-configure" element={<ServerConfigurator />} />
          <Route path="/server/$id" /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

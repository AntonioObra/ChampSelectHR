import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  Home,
  Champions,
  SingleChampion,
  Guides,
  NewGuide,
  Auth,
  SingleGuide,
  User,
  EditGuide,
} from "./pages";

import { AnimatePresence } from "framer-motion";

import "./App.scss";

const App = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/champions" element={<Champions />} />
      <Route path="/champions/:id" element={<SingleChampion />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/guides/:id" element={<SingleGuide />} />
      <Route path="/new" element={<NewGuide />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/edit/:id" element={<EditGuide />} />
    </Routes>
  );
};

export default App;

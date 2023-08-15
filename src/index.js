import React from "react";
import ReactDOM from "react-dom";
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Why from "./pages/Why";
import Source from "./pages/Source";
import CSS from "./pages/CSS";

ReactDOM.createRoot(document.getElementById("mount-point")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/why" element={<Why />} />
        <Route path="/source" element={<Source />} />
        <Route path="/css" element={<CSS />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

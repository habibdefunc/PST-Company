import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import Layanan from "../pages/Layanan";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
import Layout from "../components/layout/layout";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      {/*
      <Route
        path="/layanan-kami"
        element={
          <Layout>
            <Layanan />
          </Layout>
        }
      />
      <Route
        path="/tentang-kami"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/kontak-kami"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      */}
    </Routes>
  );
}

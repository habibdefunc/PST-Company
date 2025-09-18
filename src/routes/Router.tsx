import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
import Layout from "../components/layout/layout";
import Service from "../pages/Service";

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
      <Route
        path="/unit-kami"
        element={
          <Layout>
            <Service />
          </Layout>
        }
      />
      {/*
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

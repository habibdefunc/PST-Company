import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Layout from "../components/layout/layout";
import Service from "../pages/Service";
import NotFoundPage from "../pages/NotFound";
import Testimonial from "../pages/Testimonial";

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
      <Route
        path="/kontak-kami"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/rating-kami"
        element={
          <Layout>
            <Testimonial />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFoundPage />
          </Layout>
        }
      />
    </Routes>
  );
}

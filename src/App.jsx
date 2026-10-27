import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MembershipPage from "./pages/MembershipPage";
import EventsPage from "./pages/EventsPage";
import DirectoryPage from "./pages/DirectoryPage";
import ResourcesPage from "./pages/ResourcesPage";
import SponsorsPage from "./pages/SponsorsPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar />

      <div id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/membership"
            element={<MembershipPage />}
          />

          <Route
            path="/events"
            element={<EventsPage />}
          />

          <Route
            path="/directory"
            element={<DirectoryPage />}
          />

          <Route
            path="/resources"
            element={<ResourcesPage />}
          />

          <Route
            path="/sponsors"
            element={<SponsorsPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
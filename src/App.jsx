import { Routes, Route } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

import RefundsPolicy from "./pages/policies/RefundsPolicy";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import ShippingPolicy from "./pages/policies/ShippingPolicy";
import TermsPolicy from "./pages/policies/TermsPolicy";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <PageLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<ProductDetail />} />

        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/policies/refunds" element={<RefundsPolicy />} />
        <Route path="/policies/privacy" element={<PrivacyPolicy />} />
        <Route path="/policies/shipping" element={<ShippingPolicy />} />
        <Route path="/policies/terms" element={<TermsPolicy />} />
      </Routes>
    </PageLayout>
  );
}
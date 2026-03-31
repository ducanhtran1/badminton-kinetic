/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { ProductDetail } from "./pages/ProductDetail";
import { Checkout } from "./pages/Checkout";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { RacketFinder } from "./pages/RacketFinder";
import { Comparison } from "./pages/Comparison";
import { Wishlist } from "./pages/Wishlist";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/racket-finder" element={<RacketFinder />} />
                <Route path="/comparison" element={<Comparison />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/orders" element={<div className="p-8 text-center font-headline font-bold text-2xl">Your Orders History</div>} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

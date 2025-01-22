import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";

// Components
const HomePage = lazy(() => import("./components/home/HomePage"));
const LoginForm = lazy(() => import("./components/auth/LoginForm"));
const RegisterForm = lazy(() => import("./components/auth/RegisterForm"));
const ForgotPassword = lazy(() => import("./components/auth/ForgotPassword"));
const CartPage = lazy(() => import("./components/cart/CartPage"));
const CheckoutPage = lazy(() => import("./components/checkout/CheckoutPage"));
const OrderHistory = lazy(() => import("./components/orders/OrderHistory"));
const ProfileLayout = lazy(() => import("./components/profile"));

// Utils
const PrivateRoute = lazy(() => import("./utils/PrivateRoute"));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/*" element={<HomePage />} />

              {/* Protected routes */}
              <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<ProfileLayout />} />
                <Route path="/wishlist" element={<div>Wishlist Page</div>} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/orders" element={<OrderHistory />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

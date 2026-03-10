import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/common/ProtectedRoute";
import AdminRoute from "./components/common/AdminRoute";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Protected 
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";

// Admin
import Dashboard from "./pages/admin/Dashboard";
import ProductManagement from "./pages/admin/ProductManagement";
import OrderManagement from "./pages/admin/OrderManagement";
import Analytics from "./pages/admin/Analytics";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* User Protected Routes */}
        <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
        <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminRoute><Dashboard /></AdminRoute>} />
        <Route path="/admin/products" element={<AdminRoute><ProductManagement /></AdminRoute>} />
        <Route path="/admin/orders" element={<AdminRoute><OrderManagement /></AdminRoute>} />
        <Route path="/admin/analytics" element={<AdminRoute><Analytics /></AdminRoute>} />
      </Route>
    </Routes>
  );
}

export default App;

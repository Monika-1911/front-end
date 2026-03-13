import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Products from "./pages/Products"
import Checkout from "./pages/Checkout"
import Invoice from "./pages/Invoice"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/invoice" element={<Invoice />} />
    </Routes>
  )
}

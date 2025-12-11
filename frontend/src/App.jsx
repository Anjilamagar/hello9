

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Form from "./pages/Form/Form"
import Login from "./pages/Login/Login"
import CreateProduct from "./pages/CreateProduct/CreateProduct"
import RegistrationForm from "./pages/Login/login2"
import Product from "./pages/Product/Product"
import ProductsDetails from "./pages/Product/ProductsDetails"
import ProductUpdate from "./pages/Product/ProductUpdate"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/createProduct" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<RegistrationForm />} />
          <Route path="/createProductfinal" element={<CreateProduct />} />
          <Route path="/getAllProducts" element={<Product />} />
          <Route path="/product/:id" element={<ProductsDetails />} />
          <Route path="/product/updateProduct/:id" element={<ProductUpdate />} />


        </Routes>
      </BrowserRouter>


    </>

  )
}

export default App



import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Form from "./pages/Form/Form"
import Login from "./pages/Login/Login"
import CreateProduct from "./pages/CreateProduct/CreateProduct"

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
          <Route path="/createProductfinal" element={<CreateProduct />} />


        </Routes>
      </BrowserRouter>


    </>

  )
}

export default App

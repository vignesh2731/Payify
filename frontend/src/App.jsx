  import { BrowserRouter, Route, Routes } from "react-router-dom"
  import { SignUp } from "./pages/Signup"
  import { Signin } from "./pages/Signin"
import { SendMoney } from "./pages/SendMoney"
import { Dashboard } from "./pages/Dashboard"
import { Layout } from "./components/Layout"

  function App() {


    return (
      <>
      <BrowserRouter>

        <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/transfer" element={<SendMoney/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </>
    )
  }

  export default App

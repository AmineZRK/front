import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
// import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";

//Users
import AllUsers from "./components/pages/AllUsers";
import CreateUser from "./components/pages/CreateUser";
import SingleUser from "./components/pages/SingleUser";
//Books
import CreateBook from "./components/pages/CreateBook";
import SingleBook from "./components/pages/SingleBook";
import Layout from "./components/pages/Layout";
import Test from "./components/pages/Test";
function App() {
  return (
    <div className ="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create-book" element={<CreateBook />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/single-book/:id" element={<SingleBook />} />

          <Route path="/all-user" element={<AllUsers />} />
          <Route path="/single-user/:id" element={<SingleUser />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/test" element={<Test />}/>
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

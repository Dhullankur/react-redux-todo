import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import SignIn from "./components/form/login";
import SignUp from "./components/form/register";
import TodoHome from "./components/todo/home";
import {MainLayout} from './components/hoc/mainLayout';

const AllRoutes = () => (

  <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route exact path="/todos" element={<TodoHome />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/" element={<SignIn />} />
        </Route>
      </Routes>
  </BrowserRouter>

)

export default AllRoutes;

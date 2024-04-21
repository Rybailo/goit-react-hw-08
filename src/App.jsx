import { Toaster } from "react-hot-toast";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";
import { Layout } from "./components/Layout";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { apiRefreshUser } from "./redux/auth/operations";

const Home = lazy(() => import("./pages/Home/home"));
const Contacts = lazy(() => import("./pages/Contacts/contacts"));
const Login = lazy(() => import("./pages/Login/login"));
const Registration = lazy(() => import("./pages/Registration/registration"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster />
    </Layout>
  );
}

export default App;

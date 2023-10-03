import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"; //this is related to front end moving from different pages of my app
//outlet for header footer

//imp notes
//we gotta npm i react-router-dom for the routing to work in the front-end and to access the contact us page
//what we want is to put the whole header to footer into a thing called the BROWSER-router
//writing 'contact-us' instead of just 'contact' for SEO purposes
function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

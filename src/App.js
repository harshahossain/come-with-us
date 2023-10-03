import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <>
      <Header PNGlogo={logo} logoName="logo name" />
      <h1 className="red">Homepage</h1>
      <p>the root of my app</p>

      <Footer />
    </>
  );
}

export default App;

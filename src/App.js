import "./App.css";
// import Router from "./components/Router";
import Router2 from "./components/Router2";
import Context from "./components/Context";

function App() {
  // const cartItems = 2;
  // return <Router />;

  //[pseudo database returned userInfo]
  const userInfo = {
    name: "Icarus",
    email: "harshahossainzz@gmail.com",
    loggedIn: true,
    cartItems: 0,
  };
  return (
    <>
      <Context.Provider value={userInfo}>
        <Router2 />
      </Context.Provider>
    </>
  );
}

export default App;

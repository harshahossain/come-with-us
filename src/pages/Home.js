import "./Home.css";

export default function Home() {
  return (
    <>
      {/* <Header PNGlogo={logo} logoName="logo name" /> */}
      <h1 className="red">Come With Us</h1>
      <p>
        Hiking, Climbing, Surfing, Sking? We got you! One Stop Tour Solution
      </p>

      {/* <Footer /> */}
      <ul className="productBox">
        <li>
          <a href="/product/143" className="productLink">
            <img
              className="productImage"
              src={require("../assets/images/travel-backpack.jpg")}
              alt="travel-backpack"
            />
            <br />
            <a href="/product/143" className="productLink">
              Travel Backpack
            </a>
          </a>
        </li>
        <li>
          <a href="/product/147" className="productLink">
            <img
              className="productImage"
              src={require("../assets/images/multipurpose-shoes.jpg")}
              alt="multipurpose-shoes"
            />
          </a>
          <br />
          <a href="/product/147" className="productLink">
            Multipurpose Shoes
          </a>
        </li>
        <li>
          <a href="/product/255" className="productLink">
            <img
              className="productImage"
              src={require("../assets/images/portable-powerbank.jpg")}
              alt="portable-powerbank"
            />
          </a>
          <br />
          <a href="/product/255" className="productLink">
            Powerbank
          </a>
        </li>
        <li>
          <a href="/product/258" className="productLink">
            <img
              className="productImage"
              src={require("../assets/images/running-shoes.jpg")}
              alt="running-shoes"
            />
          </a>
          <br />
          <a href="/product/258" className="productLink">
            Running Shoes
          </a>
        </li>
        <li>
          <a href="/product/259" className="productLink">
            <img
              className="productImage"
              src={require("../assets/images/skiboard.jpg")}
              alt="skiboard"
            />
          </a>
          <br />
          <a href="/product/259" className="productLink">
            Skiboard
          </a>
        </li>
        <li>
          <a href="/product/261" className="productLink">
            <img
              className="productImage"
              src={require("../assets/images/surfboard.jpg")}
              alt="surfboard"
            />
          </a>
          <br />
          <a href="/product/261" className="productLink">
            Surfboard
          </a>
        </li>
        <li>
          <a href="/product/260" className="productLink">
            <img
              className="productImage"
              src={require("../assets/images/climb-hook.jpg")}
              alt="climb-hook"
            />
          </a>
          <br />
          <a href="/product/260" className="productLink">
            Climbing Hooks
          </a>
        </li>

        <li>
          <a href="/product/262" className="productLink">
            <img
              className="productImage"
              src={require("../assets/images/googles.jpg")}
              alt="googles"
            />
          </a>
          <br />
          <a href="/product/262" className="productLink">
            Googles
          </a>
        </li>

        <li>
          <a href="/product/263" className="productLink">
            <img
              className="productImage"
              src={require("../assets/images/headlamp.jpg")}
              alt="headlamp"
            />
          </a>
          <br />
          <a href="/product/263" className="productLink">
            Headlamp
          </a>
        </li>
        <li>
          <a href="/product/264" className="productLink">
            <img
              className="productImage"
              src={require("../assets/images/tent.jpg")}
              alt="tent"
            />
          </a>
          <br />
          <a href="/product/264" className="productLink">
            Tent
          </a>
        </li>
        <li>
          <a href="/product/265" className="productLink">
            <img
              className="productImage"
              src={require("../assets/images/portable-cycle.jpg")}
              alt="portable-cycle"
            />
          </a>
          <br />
          <a href="/product/265" className="productLink">
            Bicycle
          </a>
        </li>
        <li>
          <a href="/product/266" className="productLink">
            <img
              className="productImage"
              src={require("../assets/images/climbing-rope.jpg")}
              alt="climbing-rope"
            />
          </a>
          <br />
          <a href="/product/266" className="productLink">
            Climbing Ropes
          </a>
        </li>
      </ul>
    </>
  );
}

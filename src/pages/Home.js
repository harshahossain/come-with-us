import "./Home.css";

export default function Home() {
  return (
    <>
      {/* <Header PNGlogo={logo} logoName="logo name" /> */}
      <h1 className="red">Homepage</h1>
      <p>the root of my app</p>
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
      </ul>
    </>
  );
}

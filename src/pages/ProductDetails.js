import { useParams } from "react-router-dom";
import { useContext } from "react";
import Context from "../components/Context";

export default function ProductDetails() {
  const userData = useContext(Context);
  const params = useParams();
  let productData = null;

  //psedo database
  if (params.id === "143") {
    productData = {
      name: "Travel Backpack",
      price: "3499.00 ৳",
      image: require("../assets/images/travel-backpack.jpg"),
    };
  }
  if (params.id === "147") {
    productData = {
      name: "Multipurpose Shoes",
      price: "6599.00 ৳",
      image: require("../assets/images/multipurpose-shoes.jpg"),
    };
  }
  if (params.id === "255") {
    productData = {
      name: "PowerBank 10K",
      price: "2199.00 ৳",
      image: require("../assets/images/portable-powerbank.jpg"),
    };
  }
  if (params.id === "258") {
    productData = {
      name: "Running Shoes",
      price: "3299.00৳",
      image: require("../assets/images/running-shoes.jpg"),
    };
  }
  if (params.id === "259") {
    productData = {
      name: "Skiboard",
      price: "4099.00৳",
      image: require("../assets/images/skiboard.jpg"),
    };
  }
  if (params.id === "260") {
    productData = {
      name: "Climbing Hooks",
      price: "1499.00৳",
      image: require("../assets/images/climb-hook.jpg"),
    };
  }
  if (params.id === "261") {
    productData = {
      name: "Surfboard",
      price: "3499.00৳",
      image: require("../assets/images/surfboard.jpg"),
    };
  }
  if (params.id === "262") {
    productData = {
      name: "Googles",
      price: "1199.00৳",
      image: require("../assets/images/googles.jpg"),
    };
  }
  if (params.id === "263") {
    productData = {
      name: "Headlamp",
      price: "1299.00৳",
      image: require("../assets/images/pocket-knife.jpg"),
    };
  }
  if (params.id === "264") {
    productData = {
      name: "Tent",
      price: "4999.00৳",
      image: require("../assets/images/tent.jpg"),
    };
  }
  if (params.id === "265") {
    productData = {
      name: "Bicycle",
      price: "14999.00৳",
      image: require("../assets/images/portable-cycle.jpg"),
    };
  }
  if (params.id === "266") {
    productData = {
      name: "Climbing Ropes",
      price: "699.00৳",
      image: require("../assets/images/climbing-rope.jpg"),
    };
  }

  return (
    <>
      <h1>Product Details</h1>
      <p>The product id is: {params.id}</p>
      <p>Items in the Cart: {userData.cartItems}</p>
      {productData != null ? (
        <>
          <img src={productData.image} alt={productData.name} width="400" />
          <h2>
            {productData.name} - BDT{productData.price}
          </h2>
        </>
      ) : (
        ""
      )}
    </>
  );
}

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
  if (params.id === "158") {
    productData = {
      name: "Running Shoes",
      price: "3299.00৳",
      image: require("../assets/images/running-shoes.jpg"),
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

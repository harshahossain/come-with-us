import React, { useState, useEffect } from "react";
import axios from "axios";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [selectData, setSelectData] = useState([]); //cause its gonna take an object eventually

  useEffect(() => {
    let processing = true; //otherwise unMount calls it again
    // fetchData(processing);
    axiosFetchData(processing);
    return () => {
      processing = false;
    };
  }, []);

  // const fetchData = async (processing) => {
  //   const option = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       email: email,
  //       message: message,
  //     }),
  //   };
  //   await fetch("https://jsonplaceholder.typicode.com/users", option)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (processing) setSelectData(data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const axiosFetchData = async (processing) => {
    // const option = {
    //   email: email,
    //   message: message,
    // };
    await axios
      // .get("https://jsonplaceholder.typicode.com/users")
      .get("https://jsonplaceholder.typicode.com/users")
      // .then((res) => res.json())  //axios doesnt need to convert to json cause it gives json by default
      .then((res) => {
        // .then((data) => {
        //if (processing) setSelectData(data);
        if (processing) setSelectData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!message) {
      setError(
        <p className="required">Message is empty. Please Type a message</p>
      );
    }
    if (!email) {
      setError(
        <p className="required">Email is empty. Please give us an E-mail</p>
      );
    } else setError("");
    console.log(
      `in submit handler the email is ${email}, selec value is ${selectValue}, message is ${message}`
    );
    setEmail("");
    setMessage("");
  };

  const SelectDropDown = () => {
    return (
      <select
        value={selectValue}
        onChange={(evt) => setSelectValue(evt.target.value)}
      >
        {selectData?.map((item, index) => (
          <option
            defaultValue={item.website}
            value={item.website}
            key={item.website}
          >
            {item.website}
          </option>
        ))}
      </select>
    );
  };

  return (
    <>
      <h1>Contact Us!</h1>
      <form className="contactForm">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@mail.here"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          required
        ></input>

        <label>How Did You Hear About Us?</label>
        <SelectDropDown />

        {/* <select>
          <option>Google Searches</option>
          <option>From Facebook</option>
          <option>From Instagram</option>
          <option>From a friend</option>
        </select> */}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          placeholder="Your concerns"
          onChange={(evt) => setMessage(evt.target.value)}
          required
        ></textarea>
        {error}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Contact;

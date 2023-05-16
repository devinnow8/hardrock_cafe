import React from "react";
import Burger from "../assets/image/Burger.jpeg";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
function Cartitem() {
  return (
    <div className="middle">
      <div className="title">
        <div className="product-info">
          <img src={Burger} alt="burger" width="100" height="100" />
        </div>
      </div>
      <div className="Textcenter">
        <h2> Burger</h2>
        <div className="PlusMinus">
          <AiOutlinePlusCircle />
          <input className="count" type="text" placeholder="2" />
          <AiOutlineMinusCircle />
        </div>
      </div>
      <span>delete</span>
    </div>
  );
}

export default Cartitem;

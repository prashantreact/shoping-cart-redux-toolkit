import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const shopingProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (product) => {
    dispatch(remove(product));
  };

  //const result = JSON.parse(localStorage.getItem("userData"));
  return (
    <div>
      <h3>cart</h3>
      {shopingProducts?.map((item) => {
        return (
          <div className="cartWrapper">
            <img
              className="productImg"
              src={item.image}
              alt={"shopingProducts"}
            />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button
              className="btn"
              style={{ height: 30 }}
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

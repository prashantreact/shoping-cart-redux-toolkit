import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectItem, setSelectItem] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const handleAdd = (item) => {
    console.log(item, "item>>");
    dispatch(add(item));
    // setSelectItem([...selectItem, item]);
    // localStorage.setItem("userData", JSON.stringify(selectItem));
  };
  return (
    <div className="productsWrapper">
      {products.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.image} className="productImg" alt="productImage" />
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleAdd(item)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

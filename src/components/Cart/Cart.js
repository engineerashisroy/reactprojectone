import React from "react";
import "../Cart/Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(props);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const pasttax = JSON.parse(tax);
  const grandTotal = total + shipping + pasttax;
  return (
    <div className="cart">
      <h1>Order Summaruy</h1>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: $ {total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <p>Grand Total: ${grandTotal}</p>
    </div>
  );
};

export default Cart;

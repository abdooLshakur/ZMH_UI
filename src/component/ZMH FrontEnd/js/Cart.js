import React from "react";
import "../css/Cart.css"
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div className="body">
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="confirmation-message">
        <span>“Women's Pink Suede” has been added to your cart.</span>
      </div>
      <div className="cart-content">
        {/* Cart Items Section */}
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-info">
                  <img src="path-to-image.jpg" alt="Women's Pink Suede" />
                  <span>Women's Pink Suede</span>
                </td>
                <td>$59.90</td>
                <td>
                  <input type="number" defaultValue="1" min="1" />
                </td>
                <td>$59.90</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Summary Section */}
        <div className="cart-summary">
          <h2>Cart totals</h2>
          <div className="totals">
            <p>
              <span>Subtotal:</span> <span>$59.90</span>
            </p>
            <p>
              <span>Total:</span> <span>$59.90</span>
            </p>
          </div>
          <button className="checkout-button">
            <Link to={"/Checkout"}>Proceed to Checkout</Link>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
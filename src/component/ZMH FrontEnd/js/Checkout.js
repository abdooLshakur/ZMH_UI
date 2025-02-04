import React from "react";
import "../css/Checkout.css"
const Checkout = () => {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-form">
        {/* Left Section */}
        <div className="customer-info">
          <h2>Customer information</h2>
          <form>
            <label htmlFor="email">Username or Email Address *</label>
            <input type="email" id="email" placeholder="Enter your email" required />

            <h2>Billing details</h2>
            <div className="billing-details">
              <div className="name-group">
                <div>
                  <label htmlFor="first-name">First name *</label>
                  <input type="text" id="first-name" required />
                </div>
                <div>
                  <label htmlFor="last-name">Last name *</label>
                  <input type="text" id="last-name" required />
                </div>
              </div>
              <label htmlFor="company">Company name</label>
              <input type="text" id="company" placeholder="Optional" />
              <label htmlFor="country">Country / Region *</label>
              <select id="country" required>
                <option value="Nigeria" selected>Nigeria</option>
                {/* Add more countries here */}
              </select>
              <label htmlFor="address">House number and street name *</label>
              <input type="text" id="address" required />
              <label htmlFor="apartment">Apartment, suite, unit, etc. (optional)</label>
              <input type="text" id="apartment" />
              <div className="location-group">
                <div>
                  <label htmlFor="city">Town / City *</label>
                  <input type="text" id="city" required />
                </div>
                <div>
                  <label htmlFor="state">State *</label>
                  <input type="text" id="state" required />
                </div>
              </div>
              <label htmlFor="phone">Phone *</label>
              <input type="tel" id="phone" required />
            </div>

            <h2>Additional information</h2>
            <label htmlFor="notes">
              Notes about your order, e.g., special notes for delivery.
            </label>
            <textarea id="notes" rows="4" placeholder="Optional"></textarea>
          </form>
        </div>

        {/* Right Section */}
        <div className="order-summary">
          <h2>Your order</h2>
          <div className="order-details">
            <p className="order-item">
              <span>Women's Pink Suede × 1</span>
              <span>$59.90</span>
            </p>
            <p className="order-total">
              <strong>Total</strong>
              <strong>$59.90</strong>
            </p>
          </div>

          <h2>Payment</h2>
          <p className="error-message">
            Sorry, it seems that there are no available payment methods. Please
            contact us if you require assistance or wish to make alternate
            arrangements.
          </p>
          <button type="button" className="pay-button">Place Order $59.90</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
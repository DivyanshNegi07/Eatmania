import React, { useState } from 'react'
import '../styles/Checkout.css'
import { clearCart } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'

function Checkout() {
  const dispatch = useDispatch()
  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Address Submitted:', address);
    dispatch(clearCart());
    setOrderPlaced(true);
  };

  return (
    <div className='checkoutPage'>
      <div className="address-container">
        {orderPlaced ? (
          <h2 className="order-placed-message">🎉 Order Placed Successfully!</h2>
        ) : (
          <>
            <h2>Delivery Address</h2>
            <form className="address-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={address.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={address.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="street"
                placeholder="Street Address"
                value={address.street}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={address.state}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={address.postalCode}
                onChange={handleChange}
                required
              />
              <button type="submit" className="save-address-btn">
                Save and Continue
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default Checkout

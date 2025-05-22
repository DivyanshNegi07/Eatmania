import "../styles/Cart.css"
import { useSelector, useDispatch } from "react-redux"
import { increaseQuantity, decreaseQuantity } from "../redux/CartSlice"
import emptyIcon from '../assets/empty.svg'
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"


function Cart() {
  const cartItems = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + Math.ceil(Number(item.id) / 1000) * item.quantity
    }, 0)
    setTotalPrice(total)
  }, [cartItems])

  const handleCheckout = ()=>{
    navigate('/checkout')
  }

  if (cartItems.length === 0) {
    return (
      <>
      <div className="empty-cart">
        <img src={emptyIcon} alt="empty" />
        <h2>Your cart is empty</h2>
        <p>Looks like you haven’t added anything yet!</p>
      </div>
      <div className="Empty-cart-Explore" onClick={()=>{navigate('/')}} > Explore Delicious Food !! </div>
      </>
       
    )
  }
  return (
    <>
      <div className="cart-container" style={{ marginTop: "100px" }}>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-card">
              <img src={item.image} alt={item.title} />
              <div className="item-details-text">
                <h4>{item.title}</h4>
                <h6>By : {item.restaurantChain}</h6>
                <div className="quantity-controls">
                  <button onClick={() => {dispatch(decreaseQuantity(item.id))
                                          //setTotalPrice(totalPrice-(Math.ceil(item.id/1000)))
                  }}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => {dispatch(increaseQuantity(item.id))
                                          //setTotalPrice(totalPrice+(Math.ceil(item.id/1000)))
                  }}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="checkout-page">
            <div className="cart-item-checkout">
              { cartItems.map((item)=>(
                <div clasName="checkout-items" key={item.id}>
                  <h3>{item.title}</h3>
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h4>Qty : {item.quantity}</h4>
                    <h4>₹ {Math.ceil(Number(item.id)/1000)*item.quantity}</h4>
                  </div>
                </div>
                ))
              }
            </div>
        </div>
        <div className="checkout-total">
              <div className="order-btn-div">
                <h2>Total: ₹ {totalPrice}</h2>
                <button className="order-btn" onClick={(handleCheckout)}>Check Out</button>
              </div>
            </div>
        </div>
      </div>
        

      
    </>
  )
}

export default Cart

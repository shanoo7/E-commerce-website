import './Cart.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart, clearAllCart, decrement } from '../../Reduxtoolkit/CartSlice'
import { PiWarningCircleBold } from 'react-icons/pi'
import { MdDeleteForever } from 'react-icons/md'
function Cart() {

  const cartPage = useSelector((state) => state.cart.Cart)
  const dispatch = useDispatch()
  //total quantity
  const totalQuantity = cartPage.reduce((acc, item) => acc + item.quantity, 0)
  //total price
  const totalPrice = cartPage.reduce((acc, item) => acc + item.quantity * item.price, 0)

  return (
    <>
      <div className='header'>
        {
          cartPage.length === 0 ? "" :
            <div><p className='header-cart'> No Of Quantity : {totalQuantity} </p></div>
        }
        {
          cartPage.length === 0 ? "" : <div> <button className='header-btn' onClick={() => dispatch(clearAllCart())}>clearAll</button></div>
        }
        {cartPage.length === 0 ? "" : <div className="cart-right">
          <table className="cart-shipping-fee">
            <th> payment summery  </th>
            <tr>
              Total Price : $ {Math.floor(totalPrice)}
            </tr>
          </table>
        </div>}
      </div>


      {cartPage.length === 0 ?
        <div className="empty-header">
          <div className="empty-cart-icon">
            <div className='empty-cart'> cart is empty </div>
            <div className='empty-icon' ><PiWarningCircleBold /></div>
          </div>
        </div>

        : cartPage.map((item) => (
          <div key={item.id} className="cart-header">
            <div className="cart-img">
              <img className='cart-img2' src={item.image} alt="img" />
            </div>
            <div className="cart-title">
              <Link style={{ textDecoration: "none" }} to={`/product/${item.id}`}>
                {item.title}
              </Link>
            </div>
            <div className="cart-price"> Rs : {Math.floor(item.price * item.quantity)}</div>
            <div className="cart-btn">
              <button className='btn-increment' onClick={() => dispatch(addToCart(item))}>+</button>
              <p className='cart-quantity'>{item.quantity}</p>
              <button className='btn-decrement' disabled={item.quantity === 1} onClick={() => dispatch(decrement(item))}>-</button>
            </div>
            <div className="cart-remove" onClick={() => dispatch(removeToCart(item.id))}><MdDeleteForever className='cart-icon' /></div>

          </div>
        ))}
    </>
  )
}

export { Cart }

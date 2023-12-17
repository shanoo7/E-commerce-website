import './Item.css'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill } from 'react-icons/bs'


function Items({ allData, addToCart }) {
  const { image, title, price, id } = allData;

  return (
    <>
      <div className="container">
        <div className="items">
          <div className="image"><img className='img' src={image} alt="image"></img></div>
          <Link style={{ textDecoration: "none", color: 'grey' }} to={`/product/${id}`}> <div className="title"><h1 >{title}</h1></div></Link>
          <div className="price-cart">
            <span className='price'>{price}</span>
            <span className='cart' > <BsFillCartPlusFill onClick={addToCart} /></span>
          </div>
        </div>
      </div>
    </>
  )
}

export { Items };

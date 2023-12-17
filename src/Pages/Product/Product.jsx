import './Product.css'
import React, { useEffect, useState } from 'react'
import { FakeStoreApi } from '../../fakeApiData/FakeApiData'
import { useParams } from 'react-router-dom'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Reduxtoolkit/CartSlice'


function Product() {

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState()
  const { productId } = useParams()
  const dispatch = useDispatch()


  useEffect(() => {
    try {
      const fethchProduct = async () => {
        setLoading(true)
        const product = await FakeStoreApi.fetchDataById(productId)
        setProduct(product)
        setLoading(false)
      }
      fethchProduct()
    } catch (error) {
      console.log(error, "error");
    }
  }, [productId])


  if (!loading && !product)
    return (
      <div>no product</div>
    )


  return (
    <>
      <div className="product">

        {loading ?
          (
            <div className='main-loader'>
              <div className='loader'></div>
            </div>
          )
          :
          (
            <div className="product-item">
              <div className="product-image"><img className='product-img' src={product.image}></img></div>
              <p className='pp'><div className="product-right">
                <div className="product-title">{product.title}</div>
                <div className="product-description">{product.description}</div>
                <div className="product-price-cart">
                  <span className='price-item'>${product.price}</span>
                  <span className='cart-item' onClick={() => dispatch(addToCart(product))}><span className='product-icon'>< BsFillCartPlusFill /></span></span>
                </div>
              </div> </p>

            </div>
          )
        }

      </div>
    </>
  )
}

export { Product }

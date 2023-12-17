import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import { BsFillCartPlusFill, BsFillSearchHeartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Navbar({ onSearch }) {

  const addCartItems = useSelector((state) => state.cart.Cart)
  const [inputSearch, setInputSearch] = useState('')
  const refElement = useRef(null)

  const onclick = () => {
    if (inputSearch.trim().length) {
      onSearch(inputSearch.trim())
    }
    setInputSearch('')
  }

  useEffect(() => {
    refElement.current.focus();
  }, [onSearch])

  return (
    <>
      <div className="navbar-header">
        <div className="flipkart-logo">
          <Link to='/'> <img className='flipkart-logo' src='flipkart.svg'></img></Link>
        </div>
        <div className="nav-search">
          <div className="search">
            <input ref={refElement} type='text' value={inputSearch} placeholder=' search here...'
              onChange={(e) => {
                setInputSearch(e.target.value)
              }}></input>
          </div>
          <div onClick={onclick} className="nav-button"><BsFillSearchHeartFill /></div>
        </div>
        <Link to="cart" className='nav-text-decoration'>
          <div className="nav-cart">
            <span>
              <BsFillCartPlusFill />
              <sup>
                {addCartItems.length >= 5 ? "5+" : addCartItems.length}
              </sup>
            </span>
          </div>
        </Link>
      </div>
    </>
  )
}

export { Navbar };

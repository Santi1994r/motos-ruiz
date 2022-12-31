import React from 'react'
import { Link } from 'react-router-dom'
import './navbarStyle.css'

export default function CartWidget() {
  return (
    <>
        <div>
            <Link to="/cart">
              <button className='btnCart'><img className='cart' src='../assets/images/cart.png' alt="cart" /><span className='contador'>0</span></button>
            </Link>
        </div>
    </>
  )
};
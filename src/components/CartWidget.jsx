import React from 'react'
import cart from '../assets/images/cart.png';

export default function CartWidget() {
  return (
    <>
        <div>
            <img className='cart' src={cart} alt="" /><span className='contador'>0</span>
        </div>
    </>
  )
};
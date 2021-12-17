import React from 'react';
import { Right } from './Right';
import { ShippingForm } from './ShippingForm';
const Checkout = () => {
  return (
    <div className='checkoutContainer'>
      <div className='shipping'>
        <p>Shipping and Payment</p>
        <div className='upButtons'>
          <button className='btn btn-green'>LOG IN</button>
          <button className='btn btn-white'>SIGN UP</button>
        </div>
        <ShippingForm />
      </div>

      <Right />
    </div>
  );
};

export default Checkout;

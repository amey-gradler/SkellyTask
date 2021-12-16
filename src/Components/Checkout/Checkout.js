import React from 'react';
import { ShippingForm } from './ShippingForm';
const Checkout = () => {
  return (
    <div className='shipping'>
      <p>Shipping and Payment</p>
      <div className='btn-container'>
        <button className='btn btn-green'>LOG IN</button>
        <button className='btn btn-white'>SIGN UP</button>
      </div>
      <ShippingForm />
    </div>
  );
};

export default Checkout;

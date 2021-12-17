import React from 'react';
import paypal from '../../assets/paypal.png';
import visa from '../../assets/visa.png';
import mastercard from '../../assets/mastercard.png';
import discover from '../../assets/discover.png';
import razorpay from '../../assets/razorpay.png';
import Button from '../layout/Button';
export const Payment = () => {
  const payments = [paypal, visa, mastercard, discover, razorpay];
  return (
    <div className='payment'>
      <p>Payment Method</p>
      <div className='btn-container'>
        {payments.map((payment, index) => (
          <Button id={index} img={payment} />
        ))}
      </div>
    </div>
  );
};

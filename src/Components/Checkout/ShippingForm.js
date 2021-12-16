import React from 'react';

export const ShippingForm = () => {
  return (
    <div className='form-container'>
      <p>Shipping Information</p>
      <form action='' className='form'>
        <div className='form-row'>
          <div className='form-group'>
            <input type='email' placeholder='Email' name='email' />
          </div>
          <div className='form-group'>
            <input type='text' placeholder='Address' name='address' />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <input type='text' placeholder='First Name' name='firstName' />
          </div>
          <div className='form-group'>
            <input type='text' placeholder='City' name='city' />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <input type='text' placeholder='Last Name' name='lastName' />
          </div>
          <div className='form-group'>
            <input type='text' placeholder='Postal Code/Zip' name='zip' />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <input type='text' placeholder='Phone Number' name='phoneNUmber' />
          </div>
          <div className='form-group'>
            <input type='text' placeholder='Country' name='country' />
          </div>
        </div>
      </form>
    </div>
  );
};

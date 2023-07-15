import React, { useState } from 'react';
import "../splitter.css";

const TotalAmount = ({ totalAmount }) => {
    return (
      <div className='col2div2'>
        <p>Total Amount<br/><span>/person</span></p>
        <h3>${totalAmount}</h3>
      </div>
    );
  };
  
export default TotalAmount;
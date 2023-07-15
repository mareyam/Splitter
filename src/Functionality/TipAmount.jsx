import React, { useState } from 'react';

const TipAmount = ({ tipAmount }) => {
    return (
      <div className='col2div1 d-flex'>
        <p>Tip Amount<br/><span>/person</span></p>
        <h3>${tipAmount}</h3>
      </div>
    );
  };
  export default TipAmount;
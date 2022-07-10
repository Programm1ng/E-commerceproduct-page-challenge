import React from 'react';

function Product({ children }) {
  return (
    <div className='md:grid md:grid-cols-2 md:items-center md:max-w-6xl md:mx-auto md:mt-16'>
      {children}
    </div>
  );
}

export default Product;
import React, { useState } from 'react';
import IconPlus from '../images/icon-plus.svg'
import IconMinus from '../images/icon-minus.svg'
import IconCart from '../images/icon-cart-white.svg'

function Body({ data, addToCart }) {

  const [amount, setAmount] = useState(0);

  const decreaseAmount = () => {
    if (amount > 0) setAmount(amount - 1);
  }

  const increaseAmount = () => {
    if (amount < 100) setAmount(amount + 1)
  }

  return (
    <div>

      <div className='px-6 pt-5 pb-16 md:pb-0 md:pt-0'>

        <p className='uppercase text-primary-orange font-bold text-sm'>
          {data.company}
        </p>

        <h1 className='text-3xl font-semibold mt-3 md:text-5xl'>
          {data.title}
        </h1>

        <p className='mt-3 text-dark-grayish-blue md:mt-6'>
          {data.description}
        </p>

        <div className='mt-6 flex items-center gap-x-5 md:flex-wrap'>

          <p className='text-3xl font-semibold inline-block leading-none'>
            ${data.price.toFixed(2)}
          </p>

          <p className='bg-primary-pale-orange text-primary-orange px-2 py-1 inline-block rounded-lg font-semibold'>
            {data.discount}%
          </p>

          <p className='inline-block grow text-right text-grayish-blue line-through font-semibold md:w-full md:text-left md:mt-2'>
            ${data.oldPrice.toFixed(2)}
          </p>

        </div>

        <div className='md:flex md:gap-x-3 md:mt-10'>
          <div className=' mt-6 flex justify-between items-center py-5 px-7 bg-gray-100 rounded-lg md:min-w-[150px] md:mt-0'>

            <img onClick={decreaseAmount} src={IconMinus} alt="" />

            <p className='font-semibold text-lg'>
              {amount}
            </p>

            <img onClick={increaseAmount} src={IconPlus} alt="" />

          </div>

          <button onClick={() => { if (amount > 0) addToCart(data.id, "Autumn Limited Edition", data.price, amount, data.thumbnail) }} className='mt-4 bg-primary-orange text-white w-full rounded-lg flex justify-center py-5 items-center gap-x-3 font-semibold drop-shadow-2xl md:mt-0'>
            <img className='fill-white' src={IconCart} alt="" />
            Add to cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default Body;
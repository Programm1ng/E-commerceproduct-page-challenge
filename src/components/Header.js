import React, { useState, useEffect } from 'react';
import Menu from "../images/icon-menu.svg";
import Close from "../images/icon-close.svg";
import Cart from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import Logo from "../images/logo.svg";
import IconDelete from "../images/icon-delete.svg";


function Header({ cart, removeFromCart }) {

  const [isMenuActive, setIsMenuActive] = useState(false);

  const [isMenuActivated, setIsMenuActivated] = useState(false);

  const [isCartVisible, setIsCartVisible] = useState(false);

  const openMenu = () => {
    setIsMenuActive(true);
    setTimeout(() => {
      setIsMenuActivated(true);
    }, 0);
  }

  const closeMenu = () => {
    setIsMenuActivated(false);
    setTimeout(() => {
      setIsMenuActive(false);
    }, 300);
  }

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  }

  return (
    <header className='h-16 z-[999] md:h-auto' >

      <div className='fixed h-16 w-full bg-white px-6 flex items-center md:justify-center md:max-w-7xl md:left-1/2 md:static md:mx-auto md:translate-x-0 md:h-auto md:border-b-2'>

        <div className='w-full'>

          <div className='flex justify-between'>

            <div className='flex gap-x-4 items-center'>

              <img onClick={openMenu} className='h-4 md:hidden' src={Menu} alt="open menu" />

              <img className='h-5' src={Logo} alt="logo" />

              <ul className='hidden md:block md:space-x-6 md:ml-6 md:text-dark-grayish-blue'>

                <li className='inline-block border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-primary-orange py-10'><a className='cursor-pointer'>Collections</a></li>

                <li className='inline-block border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-primary-orange py-10'><a className='cursor-pointer'>Men</a></li>

                <li className='inline-block border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-primary-orange py-10'><a className='cursor-pointer'>Women</a></li>

                <li className='inline-block border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-primary-orange py-10'><a className='cursor-pointer'>About</a></li>

                <li className='inline-block border-b-2 border-transparent hover:text-black hover:border-b-2 hover:border-primary-orange py-10'><a className='cursor-pointer'>Contact</a></li>

              </ul>

            </div>

            <div className='flex gap-x-4 md:items-center'>

              <div className='relative select-none cursor-pointer md:flex md:items-center' onClick={toggleCartVisibility}>
                <p className='leading-none absolute cursor-pointer text-xs font-medium px-[0.4rem] py-[0.1rem] -top-1 -right-1 bg-primary-orange text-white rounded-full cursor-default md:-top-1'>
                  {cart.length > 0 ? cart.reduce((partialSum, item) => partialSum + item.amount, 0) : '0'}
                </p>
                <img className='h-6' src={Cart} alt="cart" />
              </div>

              <img className='h-6 md:h-8' src={Avatar} alt="avatar" />

            </div>

          </div>

          {isCartVisible &&
            <div className='absolute bg-white top-[4.5rem] left-2 right-2 rounded drop-shadow-2xl md:max-w-[370px] md:w-full md:left-auto md:right-2'>

              <div className='p-5'>

                <p className='font-semibold'>Cart</p>

              </div>

              <hr />

              <div className={cart.length === 0 ? 'min-h-[200px] flex items-center justify-center' : ''}>

                {cart.length === 0 && <p className=' text-dark-grayish-blue font-semibold text-lg'>Your cart is empty</p>}

                {cart.map((item, index) =>
                  <div className='flex items-center p-6 gap-x-4' key={index}>
                    <img className='h-14 w-14 rounded' src={item.thumbnail} alt="" />
                    <div className='grow'>
                      <p className='font-medium text-lg text-dark-grayish-blue'>{item.title}</p>
                      <p>${item.price.toFixed(2)} x {item.amount} <span className='pl-1 font-semibold'>${(item.price * item.amount).toFixed(2)}</span></p>
                    </div>
                    <img src={IconDelete} onClick={() => { removeFromCart(item.id); }} />
                  </div>
                )}

                {cart.length > 0 &&
                  <div className='px-6 pb-6'>
                    <button className='bg-primary-orange text-white w-full rounded-lg flex justify-center py-5 items-center gap-x-3 font-semibold drop-shadow-2xl'>
                      Checkout
                    </button>
                  </div>
                }

              </div>

            </div>}

        </div>

      </div>

      <div className={`w-screen h-screen absolute top-0 left-0 z-[9999] ${!isMenuActive ? 'hidden' : ''}`}>

        <div className={`bg-black-transparent w-screen h-screen absolute top-0 left-0 transition-opacity duration-300 ${isMenuActivated ? 'opacity-100' : 'opacity-0'}`}></div>

        <div className={`bg-white z-50 p-7 max-w-[280px] w-full inline-block h-screen transition-transform duration-300 ${isMenuActivated ? 'translate-x-0' : '-translate-x-full'}`}>

          <div>

            <img onClick={closeMenu} className='h-5 mb-12' src={Close} alt="close menu" />

            <ul className='font-semibold text-2xl text-gray-800 space-y-7'>

              <li><a href="">Collections</a></li>

              <li><a href="">Men</a></li>

              <li><a href="">Women</a></li>

              <li><a href="">About</a></li>

              <li><a href="">Contact</a></li>
            </ul>

          </div>

        </div>

      </div>

    </header >
  );
}

export default Header;
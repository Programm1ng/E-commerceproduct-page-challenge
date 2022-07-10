import React, { useState, useReducer } from 'react';
import ImageProductOne from "../images/image-product-1.jpg";
import IconPrevious from "../images/icon-previous.svg";
import IconNext from "../images/icon-next.svg";


function ImagePreview({ images }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const increaseIndex = () => {
    if (currentIndex === 3) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1)
  }

  const decreaseIndex = () => {
    if (currentIndex === 0) setCurrentIndex(3);
    else setCurrentIndex(currentIndex - 1);
  }

  return (
    <div className='md:px-6'>

      <div className='relative h-full md:max-w-md'>

        <button onClick={decreaseIndex} className='absolute z-50 bg-white h-11 w-11 flex justify-center items-center rounded-full top-1/2 -translate-y-1/2 left-4 md:hidden'>
          <img className='h-4 -translate-x-[1.5px]' src={IconPrevious} alt="" />
        </button>

        <div className='flex md:grid md:grid-rows-[1fr_auto] md:gap-y-6'>

          <img className='hidden md:block md:col-span-full md:rounded-lg' src={images[currentIndex]} />

          <div className='md:flex md:justify-between'>

            {images.map((image, index) =>
              <div onClick={() => setCurrentIndex(index)} key={index} className={(currentIndex === index ? 'md:border-primary-orange md:border-[3px] md:rounded-lg' : 'md:border-[3px] md:border-transparent') + ' cursor-pointer'}>
                <img className={(currentIndex === index ? "md:opacity-40" : 'hidden') + ' md:hover:opacity-40 md:block md:row-start-2 md:h-20 md:rounded'} src={image} />
              </div>
            )}

          </div>

        </div>

        <button onClick={increaseIndex} className='absolute z-50 bg-white h-11 w-11 flex justify-center items-center rounded-full top-1/2 -translate-y-1/2 right-4 md:hidden'>
          <img className='h-4' src={IconNext} alt="" />
        </button>

      </div>

    </div>
  );
}

export default ImagePreview;
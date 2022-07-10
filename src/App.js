import React, { useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import ImagePreview from './components/ImagePreview';
import Body from './components/Body';
import product from './data/product';

function App() {

  const { images, ...productInfos } = product;

  const [cart, setCart] = useState([]);

  const addToCart = (id, title, price, amount, thumbnail) => {

    let index = cart.findIndex(cart => cart.id === id);

    if (index > -1) {
      let items = [...cart];
      let item = { ...items[index] };
      item.amount += amount;
      items[index] = item;
      setCart(items);
    } else {
      let items = [...cart];
      items.push({
        id: id,
        title: title,
        price: price,
        amount: amount,
        thumbnail: thumbnail
      });
      setCart(items);
    }
  }

  const removeFromCart = (id) => {
    let items = [...cart];
    items = items.filter(item => item.id !== id);
    setCart(items);
  }

  return (
    <div className="App font-kumbh-sans">
      <Header cart={cart} removeFromCart={removeFromCart} />
      <Product>
        <ImagePreview images={images} />
        <Body data={productInfos} addToCart={addToCart} />
      </Product>
    </div>
  );
}

export default App;


// const { styles, ...otherProps } = this.props;
// return <ComponentOne ComponentTwo={<ComponentTwo data={data} />} />;
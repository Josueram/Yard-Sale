import React from 'react';
import '../styles/ProductInfo.scss';

const ProductInfo = () => {
  return (
    <>
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
      <div className="ProductInfo">
        <p>$ 120,00</p>
        <p>Bike</p>
        <p>With the vintage urban bike you will be able to move everywhere easily and with the unique style with which it is made. It has practical accessories of excellent quality</p>
        <button className="primary-button add-to-cart-button">
          <img src="./assets/YardSale_Icons/bt_add_to_cart.svg" alt="added to cart icon" />
          Add to cart
        </button>
      </div>
    </>
  );
}

export default ProductInfo;
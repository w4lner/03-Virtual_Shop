import React, { useState } from 'react';
import Header from './components/Header';
import Checkout from './components/Checkout';
import Filter from './components/Filter';
import ProductList from './features/producList/ProductList';
import CartModal from './features/cart/CartModal';
import WishlistModal from './features/wishlist/WishlistModal';
import Footer from './components/Footer';

function Home() {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);
  const [isOpenModalProduct, setIsOpenModalProduct] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isOpenModalFilter, setIsOpenModalFilter] = useState(false);
  const [isOpenModalWishlist, setIsOpenModalWishlist] = useState(false);
  const [dateTimeCheckout, setDateTimeCheckout] = useState(null);

  const handleOpenModalCart = () => {
    setIsOpenModalCart(true);
  };
  const handleCloseModalCart = () => {
    setIsOpenModalCart(false);
  };
  const handleOpenModalProduct = () => {
    setIsOpenModalProduct(true);
  };
  const handleCloseModalProduct = () => {
    setIsOpenModalProduct(false);
  };
  const handleOpenModalFilter = () => {
    setIsOpenModalFilter(true);
  };
  const handleCloseModalFilter = () => {
    setIsOpenModalFilter(false);
  };
  const handleOpenCheckout = () => {
    setIsCheckout(true);
    setDateTimeCheckout(new Date());
  };
  const handleCloseCheckout = () => {
    setIsCheckout(false);
  };
  const handleOpenModalWishlist = () => {
    setIsOpenModalWishlist(true);
  };
  const handleCloseModalWishlist = () => {
    setIsOpenModalWishlist(false);
  };

  const bodyApp = document.querySelector('body');
  if (
    isOpenModalCart
      || isOpenModalProduct
      || isCheckout
      || isOpenModalFilter
      || isOpenModalWishlist
  ) {
    bodyApp.classList.add('overflow-hidden');
  } else {
    bodyApp.classList.remove('overflow-hidden');
  }

  return (
    <div
      className={
          isOpenModalCart
          || isOpenModalProduct
          || isCheckout
          || isOpenModalFilter
          || isOpenModalWishlist
            ? 'overflow-hidden'
            : ''
        }
    >
      <Header
        onOpenCart={handleOpenModalCart}
        onOpenWishlist={handleOpenModalWishlist}
      />
      <main className="mt-24 container max-w-7xl mx-auto px-5 sm:px-6 min-h-[calc(100vh-189px)]">
        <h1 className="text-center font-bold text-2xl mb-10 pt-6 hidden mobile:block">
          Shop Now
        </h1>
        <ProductList
          onOpen={handleOpenModalProduct}
          onClose={handleCloseModalProduct}
          onOpenFilter={handleOpenModalFilter}
        />
      </main>
      <Footer />
      {isOpenModalCart ? (
        <CartModal
          onClose={handleCloseModalCart}
          onCheckout={handleOpenCheckout}
        />
      ) : null}
      {isCheckout ? (
        <Checkout
          closeCheckout={handleCloseCheckout}
          datetime={dateTimeCheckout}
        />
      ) : null}
      {isOpenModalFilter ? <Filter onClose={handleCloseModalFilter} /> : null}
      {isOpenModalWishlist ? (
        <WishlistModal
          onClose={handleCloseModalWishlist}
          onOpenCart={handleOpenModalCart}
        />
      ) : null}
    </div>
  );
}

export default Home;

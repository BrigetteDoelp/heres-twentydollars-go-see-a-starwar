import React from 'react';
import './Header.css';
import uggLogo from '../../Assets/ugg_logo.png';
import cart from '../../Assets/cart.png';
import search from '../../Assets/search.png';
import flag from '../../Assets/united-states.png';


function Header() {
  return (
    <article className='header'>
      <section className='top'>
        <p className='shippingNote'>Free shipping. Free returns.</p>
        <nav className='topNavBar'>
          <p>Login</p>
          <p>Join</p>
          <p>UGG Rewards</p>
          <img className='languageIndicator' src={flag} />
        </nav>
      </section>
      <section className='middle'>
        <div className='padding'> </div>
        <nav className='middleNavBar'>
          <img className ='littleUggLogo storeSections' src={uggLogo} />
          <p className='storeSections'>WOMEN</p>
          <p className='storeSections'>MEN</p>
          <p className='storeSections'>KIDS</p>
          <p className='storeSections'>HOME</p>
          <p className='storeSections'>SALE</p>
          <p className='storeSections'>EXPLORE</p>
          <p className='storeSections'>STORES</p>
          <img className ='searchIcon storeSections' src={search} />
          <img className ='cartIcon storeSections' src={cart} />
        </nav>
        <div className='padding'> </div>
      </section>
      <section className='bottom'>
      </section>
    </article>
  );
}

export default Header;

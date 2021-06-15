import React from 'react';
import './Header.css';
import uggLogo from '../../Assets/ugg_logo.png';
import starWarsLogo from '../../Assets/starwarsdeckerslogo.png';
import cart from '../../Assets/cart.png';
import search from '../../Assets/search.png';
import flag from '../../Assets/united-states.png';
import mobileUggLogo from '../../Assets/mobileugglogo.png';
import mobileBurger from '../../Assets/mobileburger.png';
import mobileCart from '../../Assets/mobilecart.png';
import mobileUserProfile from '../../Assets/mobileuserprofile.png';
import mobileSearch from '../../Assets/mobilesearch.png';


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
      <section className='mobileHeader'>
        <img className='mobileIcon' src={mobileBurger}/>
        <img className='mobileIcon' src={mobileSearch}/>
        <img className='mobileUggLogo' src={mobileUggLogo} />
        <img className='mobileIcon' src={mobileUserProfile} />
        <img className='mobileIcon' src={mobileCart} />
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
        <div className='logoArea'>
          <div className='padding'> </div>
          <div className='logoPics'>
            <img className='starWarsLogo' src={starWarsLogo} />
            <img className='bigUggLogo' src={uggLogo} />
          </div>
          <div className='padding'> </div>
        </div>
        <div className='copyArea'>
          <div className='padding'> </div>
          <p className='copy'> JUST IN TIME FOR THE LAUNCH OF STAR WARS: THE LAST JEDI, OUR DROID COLLECTION BRINGS THE KID-FAVOURITE CHARACTERS BB-8 AND R2-D2 TO LIFE IN SOFT, LIGHTWEIGHT BOOTS. NOW YOUR LITTLE ONE CAN CHANNEL THE FORCE AT SCHOOL, ON THE PLAYGROUND, OR ANY ADVENTURE IN A GALAXY FAR, FAR AWAY...</p>
          <div className='padding'> </div>
        </div>
      </section>
    </article>
  );
}

export default Header;

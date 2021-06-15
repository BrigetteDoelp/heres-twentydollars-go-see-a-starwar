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
          <button>Login</button>
          <button>Join</button>
          <button>UGG Rewards</button>
          <button> <img className='languageIndicator' src={flag} /> </button>
        </nav>
      </section>
      <section className='mobileHeader'>
        <button> <img className='mobileIcon' src={mobileBurger}/> </button>
        <button> <img className='mobileIcon' src={mobileSearch}/> </button>
        <button> <img className='mobileUggLogo' src={mobileUggLogo} /> </button>
        <button> <img className='mobileIcon' src={mobileUserProfile} /> </button>
        <button> <img className='mobileIcon' src={mobileCart} /> </button>
      </section>
      <section className='middle'>
        <div className='padding'> </div>
        <nav className='middleNavBar'>
          <button> <img className ='littleUggLogo storeSections' src={uggLogo} /> </button>
          <button className='storeSections'>WOMEN</button>
          <button className='storeSections'>MEN</button>
          <button className='storeSections'>KIDS</button>
          <button className='storeSections'>HOME</button>
          <button className='storeSections'>SALE</button>
          <button className='storeSections'>EXPLORE</button>
          <button className='storeSections'>STORES</button>
          <button> <img className ='searchIcon storeSections' src={search} /> </button>
          <button> <img className ='cartIcon storeSections' src={cart} /> </button>
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

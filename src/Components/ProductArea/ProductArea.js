import React from 'react';
import './ProductArea.css';
import boot1back from '../../Assets/boots_1__back__x.png';
import boot1front from '../../Assets/boots_1__front__x.png';
import boot2back from '../../Assets/boots_2__back__x.png';
import boot2front from '../../Assets/boots_2__front__x.png';
import goblinShoes from '../../Assets/goblin_shoes.png';

function ProductArea() {
  return (
    <article className='productArea'>
      <section className='bb8'>
        <div className='bb81'>
          <img className='singlePair' src={boot1front} />
          <p className='productName hide'>KIDS CLASSIC || BB-8</p>
        </div>
        <div className='bb82'>
          <img className='singlePair' src={boot1back} />
          <p className='productName hide'>TODDLERS CLASSIC || BB-8</p>
        </div>
      </section>
      <section className='r2d2'>
        <div>
          <img className='singlePair' src={boot2front} />
          <p className='productName hide'>KIDS CLASSIC || R2-D2</p>
        </div>
        <div>
          <img className='singlePair' src={boot2back} />
          <p className='productName hide'>TODDLERS CLASSIC || R2-D2</p>
        </div>
      </section>
      <section className='goblinShoes'>
        <img className='goblinShoePics' src={goblinShoes} />
        <p className='productNameGoblin hide'>BABY CLASSIC || R2-D2</p>
      </section>
    </article>
  );
}

export default ProductArea;

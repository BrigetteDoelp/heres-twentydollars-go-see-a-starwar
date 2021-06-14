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
        <img className='singlePair' src={boot1front} />
        <img className='singlePair' src={boot1back} />
      </section>
      <section className='r2d2'>
        <img className='singlePair' src={boot2front} />
        <img className='singlePair' src={boot2back} />
      </section>
      <section className='goblinShoes'>
        <img className='goblinShoePics' src={goblinShoes} />
      </section>
    </article>
  );
}

export default ProductArea;

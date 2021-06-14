import React from 'react';
import './ProductIntro.css';
import bootOverlay from '../../Assets/hyperdrive_overlay.png';
import rewardsLogo from '../../Assets/ugg_rewards.png';

function ProductIntro() {
  return (
    <article className='productIntro'>
      <img className='bootOverlay' src={bootOverlay} />
      <img className='rewardsLogo' src={rewardsLogo} />
      <h3 className='rewardsTitle'>UGG REWARDS PERK.</h3>
      <p className='perkDescription'>AS AN UGG REWARDS MEMBER, YOU GET EXCLUSIVE ACCESS TO THESE UGG X STAR WARS BOOTS.</p>
    </article>
  );
}

export default ProductIntro;

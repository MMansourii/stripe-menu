import React from 'react'
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  return <section className='hero' onMouseOver={closeSubmenu} >
      <div className='hero-center' >
        <article className='hero-info' >
          <h1>Payment Infrustructure for the Internet</h1>
          <p>Milions of companies of all size-form startups to fortune 500s-use,
            Stripe Softwares and APIsto accept payments,send payouts , and manage their business online
          </p>
          <button className='btn' >Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='Phone' />
        </article>
      </div>
  </section>
}

export default Hero

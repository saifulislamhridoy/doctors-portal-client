import React from 'react';
import banner from '../../assets/images/chair.png'
const Banner = () => {
    return (
        <div class="hero md:h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="md:w-1/2 rounded-lg shadow-2xl" />
                <div className='md:w-1/2 '>
                    <h1 class="text-3xl md:text-5xl font-bold ">Your New Smile Starts Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
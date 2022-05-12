import React from 'react';
import banner from '../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero md:h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="md:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div className='md:w-1/2 '>
                    <h1 className="text-3xl md:text-5xl font-bold ">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
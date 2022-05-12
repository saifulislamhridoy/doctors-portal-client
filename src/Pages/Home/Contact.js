import React from 'react';
import appointment from '../../assets/images/appointment.png'
const Contact = () => {
    return (
        <div style={{
            background: `url(${appointment})`}} className='bg-primary  px-10 py-14 '>
            <div className='text-center pb-14 text-white'>
                <p className='text-xl font-bold  text-primary'>
                    Contact Us
                </p>
                <h1 className='text-4xl'>Stay connected with us</h1>
            </div>
            <div>
              <form className='grid grid-cols-1 justify-items-center gap-5'>
              <input
                    type='email'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <input className="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary" type="submit" value="Submit" />
              </form>
            </div>
        </div>
    );
};

export default Contact;
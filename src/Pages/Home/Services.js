import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import cavity from '../../assets/images/cavity.png'
import Service from './Service';
import treatment from '../../assets/images/treatment.png'
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores, nobis minus tempora doloribus harum?",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores, nobis minus tempora doloribus harum?",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores, nobis minus tempora doloribus harum?",
            img: whitening
        },
    ]
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h2 className='text-xl text-primary font-bold'>Our Services</h2>
                <h2 className='text-2xl md:text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className='mt-10'>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src={treatment} class="md:max-w-sm rounded-lg shadow-2xl" />
                        <div className='w-full md:w-1/2 md:ml-16'>
                            <h1 class=" text-2xl md:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button class="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
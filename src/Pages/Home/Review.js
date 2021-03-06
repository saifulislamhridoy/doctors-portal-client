import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='py-3'>{review.comment}</p>
                <div className='flex items-center'>
                        <div className="avatar">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} alt=""/>
                            </div>
                        </div>
                    <div className='ml-4'>
                        <h2 className='text-xl font-bold'>{review.name}</h2>
                        <h4>{review.location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
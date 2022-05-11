import React from 'react';

const InfoCard = ({img,bgColor,infoTitle,description}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgColor}`}>
            <figure className='pl-5 mt-3'><img src={img} alt="Album"/></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{infoTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
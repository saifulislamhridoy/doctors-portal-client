import React from 'react';

const InfoCard = (props) => {
    const {img,bgColor,infoTitle,description}=props
    return (
        <div className={`card lg:card-side shadow-xl ${bgColor}`}>
            <figure className='pl-5 mt-3'><img src={img} alt="Album"/></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{infoTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
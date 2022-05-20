import React from 'react';

const Service = ({ service,setTreatment}) => {
    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length > 1 ? <span> {slots[0]}</span> : <span className='text-red-500'>No Slots Available</span>}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" onClick={()=>setTreatment(service)} disabled={slots.length===0} className="btn btn-secondary uppercase text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <InfoCard img={clock} description="4:00pm To 12:00am" infoTitle="Opening Ours" bgColor="bg-primary"></InfoCard>
            <InfoCard img={marker} description="Brooklyn, NY 10036, United States" infoTitle="Visit Our Locations" bgColor="bg-accent"></InfoCard>
            <InfoCard img={phone} description="+000 123 456789" infoTitle="Contact Us Now" bgColor="bg-primary"></InfoCard>
        </div>
    );
};

export default Info;
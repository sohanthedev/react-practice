import React from 'react';
import Featurs from './Features/Featurs';


const PricingOption = ({ option }) => {
    const { features } = option;
    
    return (
        <div className='bg-indigo-300 m-4 rounded-md p-3'>
            <div>
                <h1><span className='text-6xl font-bold text-white'>{option.price}</span><span className='text-2xl text-gray-200'>/mon</span></h1>
                <p className='text-3xl'>{ option.name}</p>
            </div>
            {
                features.map(feature=><Featurs feature={feature}></Featurs>)
            }

        </div>
    );
};

export default PricingOption;
import React from 'react';
import PricingOption from './PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: ['awesome Features',
                'Extra Features',
                'unnecessary Features',
                'will never use Features',
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: ['awesome Features',
                'Extra Features',
                'unnecessary Features',
                'will never use Features',
            ] },
        {
            id: 3, name: 'Premium', price: 19.99, features: ['awesome Features',
                'Extra Features',
                'unnecessary Features',
                'will never use Features',
            ]
},
    ]
    return (
        <div>
            <h1 className='text-5xl font-bold bg-indigo-400 p-12 text-white'>Best Deal of the Town</h1>
            <div className='grid grid-cols-3 gap-9'>
                {
                    pricingOptions.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
          </div>
        </div>
    );
};

export default Pricing;
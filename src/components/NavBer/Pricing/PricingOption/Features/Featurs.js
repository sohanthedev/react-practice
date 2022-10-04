import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Featurs = ({ feature }) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-6 w-6 text-blue-500"></CheckCircleIcon>
            <p>{ feature}</p>
        </div>
    );
};

export default Featurs;
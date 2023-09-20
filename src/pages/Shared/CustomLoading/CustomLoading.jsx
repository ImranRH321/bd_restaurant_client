import React from 'react';
import { Dna } from 'react-loader-spinner';

const CustomLoading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Dna
                visible={true}
                height="160"
                width="160"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default CustomLoading; 
import React from 'react';

export const PublicDisplay = () => {
  return (
    <section className='flex flex-row ml-10 mb-5 mt-10 text-[1.2rem]'>
      <div className='flex flex-col w-[50%]'>
        <h1 className='font-bold'>Exhibition at MKC</h1>
        <span className='border border-b-3 border-[rgb(232,230,230)] mt-3 w-[60%]'></span>
        <p className='text-[0.88rem]  text-[rgb(53,53,53)] font-mont tracking-wider font-normal'>
          April 2024 - MKC Mångkulturellt Centrum
        </p>
      </div>
      <div className='flex flex-col w-[50%]'>
        <p>Image</p>
      </div>
    </section>
  );
};

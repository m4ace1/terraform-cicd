import React from 'react';
import { gains } from '@/data';
import GainsCarousel from './GainsCarousel';

const WhatToGain = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 items-center px-4 md:px-[5rem] lg:px-[12rem] gap-y-5 lg:gap-x-12 lg:gap-32 py-9 md:py-20'>
			<div className='w-full lg:w-[26.1875rem]'>
				<h2 className='text-4xl font-bold text-secondary leading-10 text-center md:text-left mb-4 md:mb-0'>
					What you stand to <span className='text-primary'>gain</span>
				</h2>
				<p className='text-[#1E1E1E] font-normal text-lg leading-7 text-center md:text-left'>
					We are providing FREE Data and training to more than 5,000
					African youths in diverse areas such as Engineering, Content
					Creation, Product Development, and Design.
				</p>
			</div>
			<div className='w-full '>
				<GainsCarousel />
			</div>
		</div>
	);
};

export default WhatToGain;

import React from 'react';
import TestimonyCarousel from './TestimonyCarousel';
import Image from 'next/image';

const Testimony = () => {
	return (
		<div className=' bg-secondary py-8 md:py-[4.06rem] flex flex-col md:flex-row md:items-center gap-y-5 justify-between px-4 md:px-20  h-[146vh] md:h-screen'>
			<Image
				src={`/images-v2/icons/star.svg`}
				alt='human'
				height={100}
				width={100}
				className='z-10 self-start inline-block animate-pulse mix-blend-exclusion'
			/>
			<div className=' md:basis-4/5 '>
				<h2 className='text-white font-bold md:text-4xl text-3xl text-center mb-3 md:mb-8 '>
					What Our Graduates Say
				</h2>
				<TestimonyCarousel />
			</div>
			<Image
				src={`/images-v2/icons/elipse.svg`}
				alt='human'
				height={60}
				width={79}
				className='z-10 self-end inline-block animate-spin mix-blend-exclusion'
			/>
		</div>
	);
};

export default Testimony;

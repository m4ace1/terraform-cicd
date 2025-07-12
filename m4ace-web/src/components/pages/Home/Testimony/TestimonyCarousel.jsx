'use client';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { testimonies } from '@/data';
export default function TestimonyCarousel(props) {
	return (
		<Carousel
			className='w-full h-'
			animation='slide'
			indicatorIconButtonProps={{ className: 'text-white' }}
			activeIndicatorIconButtonProps={{ className: 'text-black' }}
			interval={20000}
		>
			{testimonies.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
}

function Item(props) {
	return (
		<div className='w-full md:my-5 flex flex-col items-center justify-center min:h-[30rem min-h-fit '>
			<p className='text-[rgba(255,255,255,0.8)] mt-[30px] md:mt-[50px] mb-[30px] md:mb-[54px] font-[400] text-[16px] md:text-[18px] leading-[30px] md:leading-[45px] text-center mx-[15px md:w-[758px'>
				{props.item.description}
			</p>
			<div className='flex gap-[1.94rem] items-center mb-7'>
				<img
					src={`/images-v2/testimonies/${props.item.img}.png`}
					alt={props.item.name}
					className='rounded-full w-[60px] h-[60px]'
				/>
				{/* <img src={`/images/testimony/${props.item.img}.png`} alt='' /> */}
				<div className=''>
					<p className='mb-[8px] text-[1.5rem] font-[600] leading-8 font-space text-[#9D9AE7]'>
						{props.item.name}
					</p>
					<p className='text-white font-dmsans font-[400] text-[1.125rem] leading-[1.6875rem]'>
						{props.item.stack}
					</p>
				</div>
			</div>

			{/* <Button className='CheckButton'>Check it out!</Button> */}
		</div>
	);
}

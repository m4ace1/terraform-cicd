'use client';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { gains } from '@/data';
import Image from 'next/image';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
export default function GainsCarousel(props) {
	return (
		<Carousel
			className='w-full '
			animation='slide'
			indicatorIconButtonProps={{ className: 'text-' }}
			activeIndicatorIconButtonProps={{ className: 'text-[#222057]' }}
			interval={20000}
			NextIcon={<IoIosArrowForward color='#222057' />}
			PrevIcon={<IoIosArrowBack color='#222057' />}
			navButtonsProps={{
				// Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
				style: {
					backgroundColor: 'rgba(34, 32, 87, 0.20)',
					// borderRadius: 100,
					height: '2.47rem',
					width: '2.47rem',
					opacity: 1,
				},
			}}
			// navButtonsWrapperProps={{
			// 	// Move the buttons to the bottom. Unsetting top here to override default style.
			// 	style: {
			// 		// bottom: '100',
			// 		top: '10',
			// 		backgroundColor: 'rgba(34, 32, 87, 0.20)',
			// 		height: '3.47rem',
			// 		width: '3.47rem',
			// 	},
			// }}
			next={(next, active) =>
				console.log(`we left ${active}, and are now at ${next}`)
			}
			prev={(prev, active) =>
				console.log(`we left ${active}, and are now at ${prev}`)
			}
		>
			{gains.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
}

function Item(props) {
	return (
		<div className='flex flex-col justify-center w-full lg:w-[25.875rem md:w-4/5 md:ml-16 md:mr-10  min-h-min h-[22rem] md:h-[20.125rem bg-secondary py-6 px-10 rounded-3xl'>
			<div className='flex items-center justify-center rounded-full bg-[#F5BF80] h-[56px] w-[56px]'>
				<Image
					src={`/images-v2/icons/${props.item.icon}.svg`}
					alt='human'
					height={30}
					width={30}
					className=''
				/>
			</div>
			<p className='text-white font-[500] text-[1.25rem] leading-[1.875rem] my-2 '>
				{props.item.title}
			</p>
			<p className='text-white mb-[30px] md:mb-[54px] font-[400] text-4 leading-[1.5rem]'>
				{props.item.description}
			</p>
		</div>
	);
}

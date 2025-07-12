'use client';
import { Image, ImageListItem } from '@mui/material';
import React, { useState } from 'react';

const TeamCard = ({ name, img, role, description }) => {
	const [view, setView] = useState(false);
	const handleViewMore = () => {
		setView(!view);
	};

	return (
		<div className='bg-[#FFD7A6] mix-blend- w-[16.75rem] rounded-[0.625rem] relative'>
			<div
				className={`bg-[url('/images-v2/t w-full bg-[#FFEBD3] bg-no-repeat min-h-[12rem] rounded-t-[0.625rem] flex justify-center items-center`}
				// style={{
				// 	background: `url(/images-v2/team/${img}.png) no-repeat`,
				// }}
				style={{ zIndex: 0 }}
			>
				<img
					src={`/images-v2/team/${img}.png`}
					alt={`${name} m4ace`}
					className='max-h-full '
				/>
			</div>
			<div
				className={`${
					view
						? 'absolute top-10 bg-[#FFD7A6] rounded-b-[0.625rem] z-50'
						: 'mt-[-2rem]'
				} ' flex flex-col items-center py-4  pt-[2rem] px-4 ' `}
				// mt-[-10rem] bg-[#FFD7A6] z-50
			>
				<div className=''>
					<h3 className='text-secondary text-center font-medium text-xl leading-7'>
						{name}
					</h3>
					<p className='text-[#0B0B0B] text-center text-base font-normal leading-6'>
						{role}
					</p>
				</div>
				<button
					className='flex items-center justify-center border  border-[#0B0B0B] rounded-2xl p-[0.275rem] disabled:cursor-not-allowed'
					onClick={handleViewMore}
					disabled={!description}
					title={view ? 'Details not available' : 'View'}
				>
					<span className='w-[6.31413rem]'>
						View {view ? 'Less' : 'More'}
					</span>
				</button>
				{view && (
					<p className='text-[#0B0B0B] text-xs font-normal leading-6'>
						{description}
					</p>
				)}
			</div>
		</div>
	);
};

export default TeamCard;

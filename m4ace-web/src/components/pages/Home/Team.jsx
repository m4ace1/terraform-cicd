import React from 'react';
import Card from '@/components/pages/Team/Card';
import { teams } from '@/data';
import Link from 'next/link';
const Team = () => {
	return (
		<div className='pt-8 pb-16 px-8 md:px-[5.25rem] bg-secondary'>
			<div className=''>
				<h1 className='text-white text-center font-bold leading-10 text-[2.25rem]'>
					Meet our Team{' '}
				</h1>
				<p className='text-center text-white font-normal leading-8 mb-9'>
					with over 30 years of combined experience, we&apos;ve got a
					well seasoned team at the helm.
				</p>
				<div className='flex flex-wrap justify-center gap-y-9 gap-x-[1.5rem]'>
					{/* Team Cards */}
					{teams.slice(0, 4).map((team) => (
						<Card key={team.id} {...team} />
					))}
				</div>
				<div className='flex items-center justify-center mt-[3.4rem]'>
					<Link
						href={'/team'}
						style={{
							boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
						}}
						className='text-secondary bg-white text-center font-medium text-xl md:text-2xl rounded-2xl  hover:bg-primary hover:text-white hover:animate-pulse ease-out duration-300 py-4 px-6 md:px-[2.5rem]'
					>
						See more members
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Team;

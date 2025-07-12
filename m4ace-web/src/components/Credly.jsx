import React, { useState, useEffect } from 'react';
import { teamMembers } from '@/data';
import FAQ from './pages/Home/FAQ';
import Link from 'next/link';
// Define team members and their Calendly URLs

const Card = ({ key, member, openCalendlyPopup, activeCalendly }) => {
	return (
		<div
			key={key}
			className='flex flex-col justify-center items-cente py-4 bg-white px-7 rounded'
			style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
		>
			<div className='flex items-center gap-[1.31rem] flex-shrink-0'>
				<img
					src={`/images-v2/team/${
						member.image ? member.image : 'member'
					}.png`}
					alt={member.name}
					className='w-[5.93256rem] h-[5rem] rounded-'
				/>
				<div className='mt-[1.31rem]'>
					<h3 className='text-[#222057] text-lg font-medium '>
						{member.name}
					</h3>
					<p className='text-[#0B0B0B] text-base font-normal'>
						Team member
					</p>
				</div>
			</div>
			<div className='mt-4'>
				<button
					onClick={() => openCalendlyPopup(member.calendlyUrl)}
					className={`w-full py-3 px-6 rounded-lg text-white transition-all duration-300 text-[1.125rem] font-medium ${
						activeCalendly === member.calendlyUrl
							? 'bg-green-600 hover:bg-green-700'
							: 'bg-secondary hover:bg-primary '
					}`}
					style={{
						boxShadow: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
					}}
				>
					Book Session
				</button>
			</div>
		</div>
	);
};

const CalendlyPopupSingle = () => {
	const [activeCalendly, setActiveCalendly] = useState(null);

	useEffect(() => {
		// Load the Calendly script once when the component mounts
		const script = document.createElement('script');
		script.src = 'https://assets.calendly.com/assets/external/widget.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	const openCalendlyPopup = (url) => {
		setActiveCalendly(url);
	};

	const closePopup = () => {
		setActiveCalendly(null);
	};

	return (
		<div>
			<div className='flex flex-col items-center p-6  mx-aut w-screen px-4 md:px-[9.75rem]  bg-secondary py-[5rem]'>
				<h2 className='text-white text-center font-bold leading-10 text-[2.25rem] mb-[0.75rem]'>
					Book a a session with our Team
				</h2>
				<p className='text-center text-white font-normal leading-8 mb-9'>
					Have a smooth one on one interview session with our team
				</p>
				<div className='flex flex-wrap justify-center items-center gap-8 mb-[3.44rem] overflow-scroll md:overflow-auto py-4'>
					<button
						className={` bg-white text-secondary f border border-white rounded-2xl px-5 md:w-[10rem] p-[0.625rem] text-lg font-medium hover:bg-primary '`}
					>
						Team
					</button>
					<Link
						href={'/help'}
						className={`text-center bg-secondary text-white f border border-white rounded-2xl px-5 md:w-[10rem] p-[0.625rem] text-lg font-medium hover:bg-primary '`}
					>
						Help
					</Link>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4 md:px-0'>
					{teamMembers.map((member, index) => (
						<Card
							key={index}
							member={member}
							openCalendlyPopup={openCalendlyPopup}
							activeCalendly={activeCalendly}
						/>
					))}
				</div>

				{activeCalendly && (
					<div className='w-screen fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50  h-screen'>
						<div className='relative bg-white rounded-lg shadow-lg w-full h-full max-w-4xl'>
							<button
								onClick={closePopup}
								className='absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold'
							>
								&times;
							</button>
							<iframe
								src={activeCalendly}
								className='w-full h-full'
								style={{ minHeight: '100vh' }}
								frameBorder='0'
							></iframe>
						</div>
					</div>
				)}
			</div>
			<FAQ />
		</div>
	);
};

export default CalendlyPopupSingle;

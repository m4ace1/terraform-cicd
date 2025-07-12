import React, { useState, useEffect } from 'react';
import { teamMembers } from '@/data';
import FAQ from '../pages/Home/FAQ';
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

const HelpPage = () => {
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
					Book a a session with our mentor
				</h2>
				<p className='text-center text-white font-normal leading-8 mb-9'>
					Have a smooth one on one experience with your mentors
				</p>
				<div className='flex flex-wrap justify-center items-center gap-8 mb-[3.44rem] overflow-scroll md:overflow-auto py-4'>
					<Link
						href={'/bookings'}
						className={`text-center bg-secondary text-white f border border-white rounded-2xl px-5 md:w-[10rem] p-[0.625rem] text-lg font-medium hover:bg-primary '`}
					>
						Meambers
					</Link>
					<Link
						href={'/help'}
						className={`text-center bg-white text-secondary f border border-white rounded-2xl px-5 md:w-[10rem] p-[0.625rem] text-lg font-medium hover:bg-primary '`}
					>
						Help
					</Link>
				</div>
				<div className='w-full md:5/6 px-4 md:px-[5rem] py-[2.5rem] bg-white'>
					<h3 className='text-secondary mt-[1.5rem] mb-[1.75rem] font-bold text-2xl text-center'>
						How can I schedule sessions?
					</h3>
					<p className='text-xl font-bold text-secondary mb-3 '>
						Once you book a session, here’s what happens next:
					</p>
					<ol className=' list-decimal ml-5'>
						<li className='text-xl font-normal text-secondary mb-5'>
							Email Exchange: After booking, we’ll share your
							email address with the mentor and vice versa, so you
							can communicate directly if needed.
						</li>
						<li className='text-xl font-normal text-secondary mb-5'>
							Access Chat Features: You’ll find a chat option on
							your booking confirmation page or through your
							dashboard, making it easy to connect with your
							mentor.
						</li>
						<li className='text-xl font-normal text-secondary mb-5'>
							Scheduling Links: Many mentors include a scheduling
							link in their Calendify profile. If this is
							available, you can use it to quickly confirm your
							session time.
						</li>
						<li className='text-xl font-normal text-secondary mb-5'>
							Alternative Contact: If a scheduling link isn’t
							provided, you can coordinate directly with the
							mentor using the email address shared after booking.
						</li>
						<li className='text-xl font-normal text-secondary '>
							Reminders: You’ll receive automated reminders for
							your session, ensuring you never miss your meeting
							with the mentor.
						</li>
					</ol>
					<div className='mt-8'>
						<h3 className='text-secondary mt-[1.5rem] font-bold text-2xl text-center'>
							Watch a video Guide
						</h3>
					</div>
					<div className='flex justify-center items-center  my-8'>
						{/* <img src='/images-v2/video.png' alt='play button' /> */}
						<div className='relative w-full pt-[56.25%] md:max-w-4xl mx-auto'>
							<iframe
								className='absolute top-0 left-0 w-full h-full rounded-lg shadow-lg'
								src='https://www.youtube.com/embed/yySPgBVoikI'
								title='Interview booking tutorial'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerPolicy='strict-origin-when-cross-origin'
								allowFullScreen
							></iframe>
						</div>
					</div>
					<div className='flex justify-center items-center '>
						<p className='text-xl font-normal text-secondary '>
							 Still need help? Contact Us{' '}
						</p>
						<img
							src='/images-v2/icons/whatsapp.svg'
							alt='whatsapp logo'
						/>
					</div>
				</div>
			</div>
			<FAQ />
		</div>
	);
};

export default HelpPage;

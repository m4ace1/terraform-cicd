import Animation from '@/components/common/Animation';
import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<div className='bg-secondary md:h-[41.6875rem] w-screen relative mt-6 md:mt-[10rem] md:mb-[14rem] px-4 py-6 md:py-0 md:px-10'>
			<div className='flex justify-center'>
				<img
					src={'/images-v2/about1.png'}
					alt='hero aws logo'
					className='border-[1rem] rounded-[2.5rem] border-primary mx-auto md:absolute md:top-[-13rem] hidden md:block'
				/>
			</div>
			{/* <div className='mt-[24rem]'> */}
			<div className='flex flex-col md:flex-row gap-y-4 md:gap-12 justify-center items-center py-10 px-4 md:px-12 md:mx-[8rem w-full  lg:w-[71.5rem] bg-white mx-auto  md:mt-[24rem] border-[6px] border-secondary rounded-[1.5rem]'>
				<div className='w-full md:w-2/5 h-[15rem] md:h-[25rem] relative'>
					<Image
						src={'/images-v2/about2.png'}
						alt='hero aws logo'
						className='border-[6px] rounded-[2.5rem] border-primary mx-auto '
						fill
					/>
				</div>
				<div className='py-[1.53rem] w-full md:w-3/5'>
					<h3 className='text-secondary text-[2rem] md:text-[2.25rem] font-[700] leading-[2.15rem] md:leading-[3.15rem] mb-4 md:mb-0 text-center md:text-left'>
						About Mentorship for Acceleration
					</h3>
					<p className='text-secondary text-[1.125rem] font-[400] leading-[1.687rem] text-justify'>
						At M4Ace, we provide aspiring tech enthusiasts with the
						skills and resources they need to thrive in
						today&lsquo;s fast-evolving digital world. We are
						offering free training and data subscriptions to ensure
						every student can fully participate. We equip our
						learners with industry-standard skills in areas such as
						Writing, Coding, Design, Cybersecurity, DevOps, and
						more, empowering them to build innovative projects that
						solve real-world challenges.
					</p>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

export default About;

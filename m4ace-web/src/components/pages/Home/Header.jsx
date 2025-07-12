import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Button = ({ text }) => {
	return (
		// <Link href='/'>
		<button className='hover:bg-primary rounded-3xl md:rounded-[2rem] border-1 border-[#DCDCDC] py-[0.625rem] px-[1.875rem] text-black hover:text-white shadow min-w-fit border-[0.1px]'>
			{text}
		</button>
		// </Link>
	);
};
const Header = () => {
	return (
		<div className='w-screen bg-white min-h-scree px-6 md:px-[4rem] pt-[83px] md:py-[80px]'>
			<div className='flex flex-col items-center justify-center w-full mt-[20px]'>
				<Image
					src={'/images-v2/icons/aws.svg'}
					alt='hero aws logo'
					height={64}
					width={105}
					className='inline-block animate-bounce'
				/>
				<button
					className='w-max md:w-[358px] h-[50px] rounded-[0.75rem] hover:bg-cream border-2 border-primary py-[13px] px-[10px] shadow'
					style={{
						boxShadow: '0px 4px 2px 0px rgba(0, 0, 0, 0.10);',
					}}
				>
					Hey, Our Application is now open
				</button>
			</div>
			<div className='flex my-5 md:my-0 justify-center gap-x-[2.06rem] px-4 md:px-[16.6re]'>
				<Image
					src={'/images-v2/icons/code.svg'}
					alt='hero aws logo'
					height={64}
					width={105}
					className='hidden md:inline-block animate-pulse self-start'
				/>
				<div className='md:mt-[3rem]'>
					<h1 className='text-[#222057] font-[600] text-[2.75rem] md:text-[3.75rem] leading-[3.4rem] md:leading-[5.25rem] text-center '>
						<span className='text-primary '>Empowering </span>
						Tomorrow&apos;s
					</h1>
					<h1 className='text-[#222057] font-[600] text-[2.75rem] md:text-[3.75rem] leading-[3.4rem] md:leading-[5.25rem] text-center'>
						Skill Enthusiasts
					</h1>
				</div>
				<Image
					src={'/images-v2/icons/ai.svg'}
					alt='hero aws logo'
					height={64}
					width={105}
					className='hidden md:inline-block animate-pulse self-start '
				/>
			</div>
			{/* <div className='md:mt-[-3rem]'>
				<h1 className='text-[#222057] font-[600] text-[2.75rem] md:text-[3.75rem] leading-[3.4rem] md:leading-[5.25rem] text-center '>
					<span className='text-primary '>Empowering </span>
					Tomorrow&apos;s
				</h1>
				<h1 className='text-[#222057] font-[600] text-[2.75rem] md:text-[3.75rem] leading-[3.4rem] md:leading-[5.25rem] text-center'>
					Skill Enthusiasts
				</h1>
			</div> */}
			<div className=''>
				<p className='mt-[0.81rem] text-center md:w-[32.25rem] mx-auto text-[#222057] text-base font-[500] leading-6 '>
					Begin your journey with M4ACE Tech Skills Boot Camp. Thrive
					in this evolving landscape with our FREE boot camp.
				</p>
			</div>
			<div className='flex justify-between mt-5 md:mt-0 h-[14rem]'>
				<Image
					src={'/images-v2/icons/figma.svg'}
					alt='hero aws logo'
					height={64}
					width={105}
					className='self-end inline-block animate-pulse '
				/>
				<Link
					href='/registration'
					className='py-4 px-3 text-center w-full md:w-[12.8125rem] md:px-10 rounded-[1rem] bg-primary font-[500] text-2xl leading-8 text-white self-center'
					style={{
						boxShadow: '0px 4px 2px 0px rgba(0, 0, 0, 0.10);',
					}}
				>
					Apply Now
				</Link>
				<Image
					src={'/images-v2/icons/react.svg'}
					alt='hero aws logo'
					height={64}
					width={105}
					className='self-start inline-block animate-spin'
				/>
			</div>
			<div className='flex items-center gap-8 mt-[2rem] md:mt-0 md:my-[2.06rem] overflow-scroll md:overflow-auto py-4'>
				<Button text='UI/UX Design' />
				<Button text='Cloud computing' />
				<Button text='Front End Development' />
				<Button text='Back End Development' />
				<Button text='Cyber Security' />
				<Button text='Content Writing' />
				<Button text='Brand Identity' />
			</div>
			{/* <div className='flex-1 grid grid-cols-2 mt-[30px] md:mt-0'>
				<Image
					src={'/images/hero-man.svg'}
					alt='hero man'
					height={445}
					width={342}
					className=''
				></Image>
				<Image
					src={'/images/hero-girl.svg'}
					alt='hero man'
					height={423}
					width={348}
					className='md:mt-[150px] md:ml-[-40px]'
				></Image>
      </div> */}
		</div>
	);
};

export default Header;

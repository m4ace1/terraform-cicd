import Image from 'next/image';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
// import ProgramCard from "../common/ProgramCard";
import Animation from '../common/Animation';
import { programs } from '@/data';
const ProgramCard = ({ img, name, content, key }) => {
	return (
		<div
			key={key}
			className=' gap-4 flex flex-col text-[#220057 shadow rounded-2xl w-full md:w-[22.375rem] '
			// style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
		>
			<div className='flex flex-col items-center justify-center	 bg-cream rounded-2xl p-6 pb-0 h-[20.75rem]'>
				<img src={`/images-v2/illustration/${img}.svg`} alt={name} />
				{/* <button className='py-[0.625rem] px-[1rem] bg-white text-black rounded-xl shadow self-end justify-self-end  text-xl font-medium'>
					Apply Now
				</button> */}
			</div>
			<h3 className='font-[600] text-[1.5rem] leading-[2.1rem] mt-1 md:mt-4  px-4'>
				{name}
			</h3>
			<p className='mt-[0.75rem] text-[#1E1E1E] text-lg font-normal leading-7 pb-2 px-4'>
				{content}
			</p>
		</div>
	);
};
const Program = () => {
	return (
		<section className='py-[30px]' id='programs'>
			<div className='w-full md:w-[620px] mb-[30px] text-center mx-auto px-6'>
				<h1 className='font-[700] text-[24px] md:text-[30px] leading-[42px] text-[#222057] text-center mb-4'>
					We have programs for everyone
				</h1>
				<p className='font-[400] text-[18px] leading-[27px] text-[#1E1E1E]'>
					Sign up now and receive a complimentary Data Sub, absolutely
					FREE, To unlock your Tech journey
				</p>
			</div>
			<div
				id='programs'
				className='flex flex-wrap justify-center gap-[2rem] px-6 md:pl-[164px md:px-[7rem] py-[30px] w-screen bg-white  min-h-max'
			>
				{programs.map((program) => (
					<ProgramCard key={program.name} {...program} />
				))}
				{/* <Animation style='fade-left' placement='center-center'>
					<ProgramCard
						img='fronntend'
						title='Frontend Dev.'
						content={
							'Learn how to build visually appealing and responsive websites with the latest frontend technologies. This track covers HTML, CSS, JavaScript, and popular frameworks like React. You’ll also dive into UI/UX principles, performance optimization, accessibility, and responsive design to create seamless user experiences across all devices.'
						}
					/>
				</Animation>

				<Animation style='fade-left' placement='center-center'>
					<ProgramCard
						img='content'
						title='Content Writing'
						content={
							'Master the art of content creation with techniques for crafting compelling blog posts, articles, and marketing copy. Develop SEO skills to boost visibility and create engaging narratives for different audiences and platforms.'
						}
					/>
				</Animation>
				<Animation style='fade-right' placement='center-center'>
					<ProgramCard
						img='ui'
						title='Product Design'
						content={
							'Gain expertise in designing user-centric products by mastering the design thinking process. This track covers ideation, wireframing, prototyping, and usability testing. You’ll learn how to use tools like Figma, Sketch, and Adobe XD, while also focusing on creating intuitive interfaces, user flows, and visual consistency for digital products.'
						}
					/>
				</Animation>
				<Animation style='fade-right' placement='center-center'>
					<ProgramCard
						img='backend'
						title='Backend Dev.'
						content={
							'Dive deep into server-side programming by building secure and efficient applications. Learn essential technologies such as databases, APIs, server frameworks, and deployment tools. This track includes topics on Python, Node.js, databases (SQL & NoSQL), and RESTful APIs.'
						}
					/>
				</Animation>
				<Animation style='fade-left' placement='center-center'>
					<ProgramCard
						img='cloud'
						title='Cloud Computing'
						content={
							'Learn the fundamentals of cloud computing, explore popular platforms like AWS, Azure, and Google Cloud, and understand how to deploy and manage cloud infrastructure. This track covers key topics such as virtualization, containerization, cloud security, and cost optimization.'
						}
					/>
				</Animation> */}

				{/* <Animation style='fade-right' placement='center-center'>
					<ProgramCard img='cybersecurity' title='Cybersecurity' />
				</Animation> */}
				{/* <Animation style='fade-left' placement='center-center'>
					<ProgramCard
						img='brand'
						title='Brand Identity Design'
						content={
							"Develop a strong foundation in brand identity design by learning how to create impactful visual elements that define a brand's voice. This track covers logo creation, typography, color theory, and creating cohesive branding materials for businesses."
						}
					/>
				</Animation>
				<Animation style='fade-right' placement='center-center'>
					<ProgramCard
						img='security'
						title='Cyber Security'
						content={
							'Understand the importance of protecting digital assets with this cybersecurity track. Learn about vulnerabilities, attack vectors, encryption, network security, and ethical hacking. This will equip you with skills to safeguard systems and data from potential threats.'
						}
					/>
				</Animation>
				<Animation style='fade-left' placement='center-center'>
					<ProgramCard
						img='data_anlysis'
						title='Data Analysis'
						content={
							'Become proficient in analyzing data using tools like Python, SQL, and Excel. This track covers data cleaning, visualization, and interpreting insights to drive data-driven decisions. Learn how to work with databases, create dashboards, and perform statistical analysis.'
						}
					/>
				</Animation>
				<Animation style='fade-right' placement='center-center'>
					<ProgramCard
						img='management'
						title='Product Management'
						content={
							'Become proficient in analyzing data using tools like Python, SQL, and Excel. This track covers data cleaning, visualization, and interpreting insights to drive data-driven decisions. Learn how to work with databases, create dashboards, and perform statistical analysis.'
						}
					/>
				</Animation> */}
			</div>
		</section>
	);
};

export default Program;

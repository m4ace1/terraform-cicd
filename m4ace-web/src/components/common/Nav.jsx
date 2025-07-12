'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Link as LinkTo } from 'react-scroll';
import { FcMenu } from 'react-icons/fc';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
const styles = {
	maxWidth: 'max-w-[1350px] mx-auto px-[125px]',
};

const Nav = ({ path }) => {
	const currentPath = useRouter().pathname;
	// console.log(path);
	const [menu, setMenu] = useState(false);
	const handleMenu = () => {
		if (menu) {
			setMenu(false);
		} else {
			setMenu(true);
		}
	};

	return (
		<nav
			className={`z-[30] border-b h-[84px] fixed max-w-[100vw] flex items-center  bg-white ${
				menu ? 'opacity-3' : ''
			}  bg-white font-source font-[600] px-[20px] md:px-[100px]`}
			style={{
				boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
			}}
		>
			<div
				className={` md:py-3 text-black h-[80px] md:h-[60px] w-screen md:flex md:items-center text-[20px] justify-between`}
			>
				<div className='flex justify-between items-center h-full cursor-pointer mx-3'>
					<Link
						className='text-[20px] hover:text-primary duration-500'
						href='/'
					>
						<Image
							src='/images/logo.svg'
							width={140}
							height={90}
							className=''
							alt='m4ace logo'
						/>
					</Link>
					<FcMenu
						color='#ffffff'
						size='40'
						className='text-white md:hidden'
						onClick={handleMenu}
					/>
				</div>
				<div
					className={`${
						menu
							? 'top-[60px] opacity-100 pb-6 z-10 h-screen bg-black'
							: 'hidden'
					}  md:flex  md:items-center md:static absolute md:bg-transparent bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 font-normal text-[20px] `}
				>
					<ul className='flex flex-col md:flex-row gap-y-7 items-center h-1/2 justify-center md:justify-between md:items-center md:gap-x-[35px] lg:gap-x-[60px]'>
						<li className=' '>
							<Link
								className={`${
									path === '/'
										? 'text-[#050F1F] border-2 py-1 px-1 rounded'
										: ''
								} font-[400] text-[18px] duration-500 w-max block`}
								href='/'
								onClick={handleMenu}
							>
								Home
							</Link>
						</li>
						{/* <li className="">
              <LinkTo
                className={`${
                  currentPath === "/about"
                    ? "text-[#050F1F] border-2 py-1 border-[#006F36] px-1 rounded cursor-pointer"
                    : "cursor-pointer"
                } font-[400] text-[18px]  duration-500 font-source`}
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                onClick={handleMenu}
              >
                About
              </LinkTo>
            </li> */}
						<li className=' '>
							<LinkTo
								to='programs'
								spy={true}
								smooth={true}
								offset={50}
								duration={800}
								className='font-[400] text-[18px] duration-500 w-max block cursor-pointer'
								onClick={handleMenu}
							>
								Our Programs
							</LinkTo>
							{/* <Link
                className={`${
                  path === "/programs"
                    ? "text-[#050F1F] border-2 py-1 px-1 rounded"
                    : ""
                } font-[400] text-[18px] duration-500 w-max block`}
                href="/#programs"
                onClick={handleMenu}
              >
                Our Programs
              </Link> */}
						</li>
						<li className=''>
							<LinkTo
								className={`${
									currentPath === 'patrons'
										? 'text-[#050F1F] border-2 py-1 border-[#006F36] px-1 rounded cursor-pointer'
										: 'cursor-pointer'
								} font-[400] text-[18px]  duration-500 font-source`}
								to='patrons'
								spy={true}
								smooth={true}
								offset={50}
								duration={800}
								onClick={handleMenu}
							>
								Patrons
							</LinkTo>
						</li>
						<li className=''>
							<LinkTo
								className={`${
									path === 'faq'
										? 'text-[#050F1F] border-2 py-1 border-[#006F36] px-1 rounded'
										: ''
								} font-[400] text-[18px]  duration-500 font-source cursor-pointer`}
								to='faq'
								spy={true}
								smooth={true}
								offset={50}
								duration={800}
								onClick={handleMenu}
							>
								FAQ
							</LinkTo>
						</li>
						<li className=''>
							<Link
								className={`${
									path === 'team'
										? 'text-[#050F1F] border-2 py-1 border-[#006F36] px-1 rounded'
										: ''
								} font-[400] text-[18px]  duration-500 font-source cursor-pointer w-max block
								`}
								href='/team'
								onClick={handleMenu}
							>
								Our Team
							</Link>
						</li>
					</ul>
					<div className='md:ml-[60px] lg:ml-[80px] flex flex-col md:flex-row items-center  md:justify-center md:items-center md:w-full  md:gap-x-[48px] gap-y-[20px] md:gap-y-0'>
						{/* <Link
							href='/registration'
							className=' text-white bg-primary w-[150px] text-center font-source rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300 py-[5px] px-[10px]'
							onClick={handleMenu}
						>
							Apply Now
						</Link> */}
						{/* <Link
							href='/bookings'
							className=' text-white bg-primary  text-center font-source rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300 py-[5px] px-[10px]'
							onClick={handleMenu}
						>
							Schedule Interview
						</Link> */}

						<a
							href='https://lms.m4ace.com/'
							target='_blank'
							className=' text-white bg-primary  text-center font-source rounded-lg  hover:bg-primaryYellow hover:animate-pulse ease-out duration-300 py-[5px] px-[10px]'
						>
							LMS
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;

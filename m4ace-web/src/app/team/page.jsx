import Footer from '@/components/common/Footer';
import FAQ from '@/components/pages/Home/FAQ';
import Partners from '@/components/pages/Home/Partners';
import Team from '@/components/pages/Team';
import React from 'react';
import { Fa0 } from 'react-icons/fa6';

const Teams = () => {
	return (
		<div className='pt-[83px] md:py-[80px]'>
			<Team />
			<FAQ />
			<Partners />
		</div>
	);
};

export default Teams;

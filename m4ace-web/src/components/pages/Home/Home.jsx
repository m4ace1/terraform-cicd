import React from 'react';
import Header from './Header';
import Info from './Info';
import FAQ from './FAQ';
import Animation from '@/components/common/Animation';
import Footer from '@/components/common/Footer';
import About from './About';
import Partners from './Partners';
import Contact from './Contact';
import Program from '../Program';
import Patron from './Patrons';
import Testimony from './Testimony';
import HowToJoin from './HowToJoin';
import WhatToGain from './WhatToGain';
import Team from './Team';

const Home = () => {
	return (
		<div>
			<Header />
			<Animation style='fade-right' placement='center-center'>
				{/* <Info /> */}
				<About />
			</Animation>
			<Animation style='fade-right' placement='center-center'>
				<WhatToGain />
			</Animation>
			<Animation style='fade-right' placement='center-center'>
				<Program />
			</Animation>
			<Animation style='fade-right' placement='center-center'>
				<Testimony />
			</Animation>
			{/* <Animation style='fade-right' placement='center-center'> */}
			<HowToJoin />
			{/* </Animation> */}
			<Animation style='fade-left' placement='center-center'>
				<Team />
			</Animation>
			<Animation style='fade-right' placement='center-center'>
				<Patron />
			</Animation>
			<FAQ />
			<Animation style='fade-left' placement='center-center'>
				<Partners />
			</Animation>
			{/* <Animation style="fade-right" placement="center-center">
        <Footer />
      </Animation> */}
		</div>
	);
};

export default Home;

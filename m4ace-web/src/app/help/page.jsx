'use client';
import CalendlyPopupMultiple from '@/components/Credly';
import HelpPage from '@/components/pages/Help';
import React, { useEffect } from 'react';

const CalendlyEmbed = () => {
	return (
		<>
			<div className='h-[90px]'></div>
			<div className='min-h-screen flex items-center justify-center bg-gray-100'>
				<HelpPage />
			</div>
		</>
	);
};

export default CalendlyEmbed;

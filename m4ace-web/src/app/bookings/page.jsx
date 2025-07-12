'use client';
import CalendlyPopupMultiple from '@/components/Credly';
import React, { useEffect } from 'react';

const CalendlyEmbed = () => {
	// useEffect(() => {
	// 	const script = document.createElement('script');
	// 	script.src = 'https://assets.calendly.com/assets/external/widget.js';
	// 	script.async = true;
	// 	document.body.appendChild(script);

	// 	return () => {
	// 		document.body.removeChild(script);
	// 	};
	// }, []);

	return (
		<>
			<div className='h-[90px]'></div>
			{/* <div className='mt-' style={{ minWidth: '320px', height: '700px' }}>
				<div
					className='calendly-inline-widget'
					data-url='https://calendly.com/adefemi-sanyaolu-m4ace?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=1a0a5e'
					style={{ width: '100%', height: '100%' }}
				/>
                
			</div> */}
			<div className='min-h-screen flex items-center justify-center bg-gray-100'>
				<CalendlyPopupMultiple />
			</div>
		</>
	);
};

export default CalendlyEmbed;

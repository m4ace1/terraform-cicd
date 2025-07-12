import { Inter, Rubik } from 'next/font/google';
import './globals.css';
import Nav from '@/components/common/Nav';
import Footer from '@/components/common/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const rubik = Rubik({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata = {
	title: 'Mentorship for Acceleration (M4ACE)',
	description:
		'Embark on Your Tech Journey: Register for our curated FREE training courses and get the right Mentorship, Tools and Content.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=G-BX6Y44W4SC`}
				/>
				<script id='google-analytics'>
					{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BX6Y44W4SC');
          `}
				</script>
				<meta charset='UTF-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta name='robots' content='index, follow' />
				<meta
					name='description'
					content='M4ACE offers free tech skills boot camps, empowering aspiring tech enthusiasts with industry-standard skills in areas like Writing, Coding, Design, Cybersecurity, data analysis, project management and DevOps.'
				/>
				<meta
					name='keywords'
					content='M4ACE, tech skills boot camp, free training, coding, design, cybersecurity, DevOps, cloud computing, product design, content writing, brand identity design, data analysis, project management, free mentorship, tech mentorship, tech transitioning, m4ace,Mentorship program for students, Mentorship program, Mentorship program for youth, Mentorship program for Adult, Mentoring Programs'
				/>
				<meta name='author' content='M4ACE' />
				<meta
					property='og:title'
					content="M4ACE: Empowering Tomorrow's Skill Enthusiasts"
				/>
				<meta
					property='og:description'
					content="Join M4ACE's free tech skills boot camp and gain industry-standard skills in areas like Writing, Coding, Design, Cybersecurity, data analysis, project management, and DevOps."
				/>
				<meta
					property='og:image'
					content='https://m4ace.com/images-v2/m4ace.png'
				/>
				<meta property='og:url' content='https://m4ace.com/' />
				<meta property='og:type' content='website' />
				<meta property='og:locale' content='en_US' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:title'
					content="M4ACE: Empowering Tomorrow's Skill Enthusiasts"
				/>
				<meta
					name='twitter:description'
					content="Join M4ACE's free tech skills boot camp and gain industry-standard skills in areas like Writing, Coding, Design, Cybersecurity, data analysis, project management, and DevOps."
				/>
				<meta
					name='twitter:image'
					content='https://m4ace.com/images-v2/m4ace.png'
				/>
				<link rel='icon' href='favicon.ico' />
			</head>
			<body className={`${rubik.className} overflow-x-hidden `}>
				<Nav />
				{children}
			</body>
			<Footer />
		</html>
	);
}

'use client';
import React, { useState } from 'react';
import Card from './Card';
import { teams } from '@/data';
const Team = () => {
	const [selectedTeam, setSelectedTeam] = useState('all');

	// Get a unique list of team names for buttons
	const teamNames = ['all', ...new Set(teams.map((person) => person.team))];
	console.log(selectedTeam);

	// Filter teams based on the selected team
	const filteredTeams =
		selectedTeam === 'all'
			? teams
			: teams.filter((person) => person.team === selectedTeam);

	return (
		<div className='pt-8 pb-16 px-8 md:px-[5.25rem] bg-secondary'>
			<div className=''>
				<h1 className='text-white text-center font-bold leading-10 text-[2.25rem]'>
					Meet our Team{' '}
				</h1>
				<p className='text-center text-white font-normal leading-8 mb-9'>
					with over 30 years of combined experience, we&apos;ve got a
					well seasoned team at the helm.
				</p>
				<div className='flex flex-wrap justify-center items-center gap-8 mb-[3.44rem] overflow-scroll md:overflow-auto py-4'>
					{teamNames.map(
						(team, index) =>
							team.length > 1 && (
								<button
									key={index}
									onClick={() => setSelectedTeam(team)}
									className={`${
										selectedTeam == team
											? 'bg-white text-secondary'
											: ' bg-secondary text-white'
									} ' f border border-white rounded-2xl px-5 md:w-[10rem] p-[0.625rem] text-lg font-medium '`}
								>
									{team.charAt(0).toUpperCase() +
										team.slice(1)}
								</button>
							)
					)}
				</div>
				<div className='flex flex-wrap justify-center gap-y-9 gap-x-[1.5rem] '>
					{/* Team Cards */}
					{filteredTeams.map((team) => (
						<Card key={team.id} {...team} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Team;

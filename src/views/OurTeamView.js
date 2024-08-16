import React from 'react';
import '../styles/OurTeamView.css';
import MemberCard from '../components/MemberCard';

export default function OurTeamView() {
    const team = [
        {
            name: "Happy Gilmore",
            info: "Happy Gilmore is a long-time hockey enthusiast who fell in love with golf.",
            image: "Happy-Gilmore"
        },
        {
            name: "Billy-Jean Madison",
            info: "Billy-Jean Madison enjoys learning from her colleagues.",
            image: "Billy-Jean-Madison"
        }
    ];

    return (
        <div className='our-team'>
            <section aria-label='Our Team Section'>
                <div className='container-1400'>
                    <div className='card-container'>
                        {team.map(member => (
                            <MemberCard
                                key={member.name}
                                member={member}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

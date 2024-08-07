import React from 'react';
import ContactSection from '../components/ContactSection';
import Button from '../components/Button';
import '../styles/AboutView.css';

const projectFour = '../assets/project-4.jpg';

export default function AboutView() {
    return (
        <div className='about-container'>
            <div className='about-header'>
                <div className='about-dual-container'>
                    <div className='box-1'>
                        <h1>About</h1>
                    </div>
                    <div className='box-2'>
                        <p>
                            We think of architecture not as a single practice, but as
                            several interlocking ones. Landscapes are inseparable from
                            structures, ecology is inseparable from building requirements,
                            and improving human relationships is the ultimate goal of any project.
                            Aesthetic movements come and go, but we have found these
                            principles to be timeless.
                        </p>
                        <p>
                            As partners, we strive for honesty and clarity. Our first
                            job is to understand the client’s vision and needs, not
                            to present our own. We value timeliness, direct
                            communication, and prototypes over presentations, as
                            well as the occasional face-to-face meeting over a
                            drink or a meal.
                        </p>
                        <p>
                            Over the years, we have been fortunate to collaborate 
                            with some excellent clients on some wonderful projects,
                            but we believe it is still too early to weigh in on the
                            success of the work. A building exists in time and its
                            usefulness is directly related to how well it
                            continues to perform.
                        </p>
                        <p>
                            We are proud of our Danish home and heritage, but do not consider ourselves exponents of Danish design. National style has no place in architecture, where a building must first and foremost be suited to local needs.
                        </p>
                    </div>
                </div>
            </div>
            <ContactSection variant={'dark'} backgroundImage={projectFour}>
                    <h2>Let's Work Together</h2>
                    <Button variant='light'>Contact Us</Button>
                </ContactSection>
            <main></main>
        </div>
    );
}

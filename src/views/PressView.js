import React from 'react';
import ContactSection from '../components/ContactSection';
import Button from '../components/Button';
import '../styles/PressView.css';

export default function PressView() {
    return (
        <div className='press'>
            <section aria-label='Press Reviews Section'>
                <div className='dual-container-1400'>
                    <div className='press-box-1'>
                        <h1>Press</h1>
                    </div>
                    <div className='press-box-2'>
                        <blockquote>
                            “Their buildings often establish expectations and then
                            flip them, creating a sense of weightlessness and wonder.”
                            <cite>– Press Source</cite>
                        </blockquote>
                        <blockquote>
                            “Utica have established themselves at the forefront of a new
                            class of architecture studios that practice ‘placemaking,’ a
                            sort of total design philosophy that encompasses buildings,
                            landscapes, ecology and social interaction.”
                            <cite>– Press Source</cite>
                        </blockquote>
                        <blockquote>
                            “Surprisingly, three of my favorite projects from last year
                            came from the same small studio: Utica. With a combination of
                            deep research and spontaneous wit, their practice has injected
                            new ideas into an architectural landscape that desperately needs them.”
                            <small>– Press Source</small>
                        </blockquote>
                    </div>
                </div>
            </section>
            <ContactSection background='other'>
                <h2>Let's Work Together</h2>
                <Button variant='dark'>Contact Us</Button>
            </ContactSection>
        </div>
    );
}

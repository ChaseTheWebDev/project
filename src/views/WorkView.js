import '../styles/WorkView.css';
import ContactSection from '../components/ContactSection';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

import ProjectImage1 from '../assets/project-1.jpg';
import ProjectImage2 from '../assets/project-2.jpg';
import ProjectImage3 from '../assets/project-3.jpg';
import ProjectImage4 from '../assets/project-4.jpg';

export default function WorkView() {
    return (
        <div className="workview-container">
            <header className="container-1400">
                <p>
                    Utica is an architecture firm based in Copenhagen, Denmark.
                </p>
            </header>
            <main>
                <div className='workview-image-1'></div>
                <div className='container-1400'>
                    <div className='recent-work'>
                        <h2>Recent Work</h2>
                        <p>
                            Our practice spans from environmental 
                            retrofits of existing buildings to the 
                            complete planning and design of new 
                            neighborhoods and public spaces. While
                            our work is aesthetically diverse, our
                            projects are linked by a focus on
                            enhancing human relationships
                            through architecture.
                        </p>
                    </div>
                </div>
                    <div className='project-list-container'>
                        <a href="/project/one" className="project-link">
                            <img src={ProjectImage1} alt="Project 1" className="project-image"/>
                            <h5>Project 1</h5>
                        </a>
                        <a href="/project/two" className="project-link">
                            <img src={ProjectImage2} alt="Project 2" className="project-image"/>
                            <h5>Project 2</h5>
                        </a>
                        <a href="/project/three" className="project-link">
                            <img src={ProjectImage3} alt="Project 3" className="project-image"/>
                            <h5>Project 3</h5>
                        </a>
                        <a href="/project/four" className="project-link">
                            <img src={ProjectImage4} alt="Project 4" className="project-image"/>
                            <h5>Project 4</h5>
                        </a>
                    </div>

                
                <ContactSection>
                    <h2>Let's Work Together</h2>
                    <p>We’re always looking for new 
                        opportunities and are comfortable
                        working internationally. Please
                        get in touch and one of our
                        project managers will
                        contact you about beginning
                        the proposal process.
                    </p>
                   <Button variant='light'>Contact Us</Button>
                </ContactSection>
            </main>
        </div>
    );
}

import '../styles/WorkView.css';
import ProjectImage1 from '../assets/project-1.jpg';
import ProjectImage2 from '../assets/project-2.jpg';
import ProjectImage3 from '../assets/project-3.jpg';
import ProjectImage4 from '../assets/project-4.jpg';

export default function WorkView() {
    return (
        <div className="workview-container">
            <header>
                <p>
                    Utica is an architecture firm based in Copenhagen, Denmark.
                </p>
            </header>
            <main>
                <div className='workview-image-1'></div>
                <div className='recent-work-container'>
                    <div className='recent-work-header'>
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
                    <div className='project-list-container'>
                        <a href="/project-1" className="project-link">
                            <img src={ProjectImage1} alt="Project 1" className="project-image"/>
                            <h5>Project 1</h5>
                        </a>
                        <a href="/project-2" className="project-link">
                            <img src={ProjectImage2} alt="Project 2" className="project-image"/>
                            <h5>Project 2</h5>
                        </a>
                        <a href="/project-3" className="project-link">
                            <img src={ProjectImage3} alt="Project 3" className="project-image"/>
                            <h5>Project 3</h5>
                        </a>
                        <a href="/project-4" className="project-link">
                            <img src={ProjectImage4} alt="Project 4" className="project-image"/>
                            <h5>Project 4</h5>
                        </a>
                    </div>
                </div>
                <div className='lets-work-container'>
                    <h2>Let's Work Together</h2>
                    <p>We’re always looking for new 
                        opportunities and are comfortable
                        working internationally. Please
                        get in touch and one of our
                        project managers will
                        contact you about beginning
                        the proposal process.
                    </p>
                    <button className='workview-button'>Contact Us</button>
                </div>
            </main>
        </div>
    );
}

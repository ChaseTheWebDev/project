import '../styles/ProjectView.css';
import { useParams } from 'react-router-dom';
import ProjectsNavbar from '../components/ProjectsNavbar';

const numberMap = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
};

const reverseNumberMap = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
};

const projectDescriptions = {
    "one": (
        <div>
            <p>We think of architecture not as a single practice, but as several interlocking ones...</p>
            <p>We think of architecture not as a single practice, but as several interlocking ones...</p>
            <p>We think of architecture not as a single practice, but as several interlocking ones...</p>
            <p>We think of architecture not as a single practice, but as several interlocking ones...</p>
        </div>
    ),
    "two": (
        <div>
            <p>We think of architecture not as a single practice, but as several interlocking ones...</p>
        </div>
    ),
    "three": (
        <div>
            <p>We think of architecture not as a single practice, but as several interlocking ones...</p>
        </div>
    ),
    "four": (
        <div>
            <p>We think of architecture not as a single practice, but as several interlocking ones...</p>
        </div>
    ),
};

function convertStringToNumber(string) {
    return numberMap[string] || null;
}

function convertNumberToString(number) {
    return reverseNumberMap[number] || null;
}

export default function ProjectView() {
    const { id } = useParams();
    const projectNumber = convertStringToNumber(id);
    const nextNumber = projectNumber ? projectNumber + 1 : null;
    const previousNumber = projectNumber ? projectNumber - 1 : null;
    const renderedNextString = convertNumberToString(nextNumber);
    const renderedPreviousString = convertNumberToString(previousNumber);
    const currentDescription = projectDescriptions[id] || <p>Project not found</p>;
    
    const imageClass = `project-view-image ${id}`;

    return (
        <div className="project">
            <div className="dual-container-1400">
                <div className="project-box-1">
                    <h2>Project {id.charAt(0).toUpperCase() + id.slice(1)}</h2>
                </div>
                <div className="project-box-2">
                    {currentDescription}
                </div>
            </div>
            <div className={imageClass}>
                {/* Background image*/}
            </div>
            <ProjectsNavbar 
                previous={`Project ${renderedPreviousString || ''}`} 
                next={`Project ${renderedNextString || ''}`} 
                project={id} 
            />
        </div>
    );
}

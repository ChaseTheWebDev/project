import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectView.css';

export default function ProjectView() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Replace with actual data source
        const fetchProjectData = async () => {
            try {
                const response = await fetch(`/projects/${id}`);
                const data = await response.json();
                setProject(data);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchProjectData();
    }, [id]);
    if (!project) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="project-view-container">
            <div className="project-dual-container">
                <div className="project-box-1">
                    <h2>{project.title || 'Project Title'}</h2>
                </div>
                <div className="project-box-2">
                    <blockquote>
                        {project.description || 'Project description will be available shortly.'}
                    </blockquote>
                </div>
            </div>
            <div className="project-image" style={{ backgroundImage: `url(${project.imageUrl || '/default-image.jpg'})` }}></div>
        </div>
    );
}

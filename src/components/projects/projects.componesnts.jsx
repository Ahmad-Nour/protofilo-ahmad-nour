import { useState } from 'react';
import './projects.styles.scss';
import { ProjectsData } from './data/project.data';

const Projects = () => {

    const [projects] = useState(ProjectsData);

    return (
        <div className='projectContainer'>
            <h1 className='projectTitle'>Projects</h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <div
                        className="project"
                        style={{
                            backgroundImage: `linear-gradient(rgba(100, 100, 200, 0.8), rgba(100, 100, 200, 0.9)), url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',

                        }}
                        key={project.name}>

                        <a href={project.url} target='_blank'>
                            <h3>{project.name}</h3>
                        </a>

                        <p>{project.description}</p>

                        <div className="tech-stack">
                            {project.tech.map(tech =>
                                <span key={tech}>{tech}</span>
                            )}
                        </div>

                        <div className="members">
                            {`${project.members} ${project.members == 1 ? 'Member' : 'Members'}`}
                        </div>
                        <p>Status: {project.status}</p>
                        <p>Associated with: {project.association.associatedWith}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
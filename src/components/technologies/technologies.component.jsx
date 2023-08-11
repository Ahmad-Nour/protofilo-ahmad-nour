import { useState, useEffect, Fragment } from 'react';
import { techImages } from './data/technologies.data';
import './technologies.styles.scss';
import TechItem from './components/tech-item.component';

function Technologies() {

    return (
        <Fragment>
            <div className="tech-container">
            <h1 className='technologiesTitle'>Technologies</h1>
                <div className="tech-grid">
                    {techImages.map(tech => (
                        <TechItem key={tech.name} tech={tech} />
                    ))}
                </div>
            </div>
        </Fragment>
    );

}

export default Technologies;
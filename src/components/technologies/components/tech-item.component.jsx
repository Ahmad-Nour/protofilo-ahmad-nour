import { useState, useEffect } from 'react';
import './tech-item.styles.scss';

const TechItem = ({ tech }) => {

    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent(prevPercent => {
                if (prevPercent +1 >= tech.percent) clearInterval(timer);
                return prevPercent + 1;
            });
        }, 20);

        return () => clearInterval(timer);

    }, []);

    return (
        <div className="tech">
            <img src={tech.image} />
            <div className="label">
                <div className="name">{tech.name}</div>
                <div className="percent">
                    <div className="number">{percent}%</div>
                    <div className="bar">
                        <div className="progress" style={{ width: `${percent}%` }}></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TechItem;
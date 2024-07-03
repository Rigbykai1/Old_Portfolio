import React, { useEffect, useState } from 'react';
import ModalCard from './ModalCard';

const ProjectCard = (props) => {
    const { bgImage1, bgImage2, title, description, link, ButtonText, id } = props;
    const [currentImage, setCurrentImage] = useState(bgImage1);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImage((prevImage) => prevImage === bgImage1 ? bgImage2 : bgImage1);
        }, 3000);
        return () => clearInterval(imageInterval);
    }, [bgImage1, bgImage2]);

    return (
        <>
            <div className="card sd:card-side bg-black/40 shadow-xl">
                <figure onClick={() => document.getElementById(id).showModal()} className='p-4'>
                    <img
                        className='rounded-xl cursor-pointer hover:scale-95'
                        src={currentImage}
                        alt="Movie"
                    />
                </figure>

                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <a className="btn btn-success hover:scale-110" href={link}>{ButtonText}</a>
                    </div>
                </div>
            </div>
            <ModalCard
                bgImage1={bgImage1}
                bgImage2={bgImage2}
                id={id}
            />
        </>
    );
};

export default ProjectCard;

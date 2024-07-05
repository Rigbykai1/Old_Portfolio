import React, { useState } from 'react';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

const ModalCard = (props) => {
    const { bgImage1, bgImage2, id } = props;
    const [currentImage, setCurrentImage] = useState(bgImage1);

    const idCatcher = (str) => {
        const sections = str.split('/');
        return sections[sections.length - 1];
    }

    const openImage = (img) => {
        window.open(img, '_blank');
    };

    const handleNextImage = () => {
        setCurrentImage(bgImage2);
    };

    const handlePrevImage = () => {
        setCurrentImage(bgImage1);
    };

    return (
        <dialog id={id} className="modal backdrop-blur-lg">
            <div className="modal-box w-11/12 max-w-2xl bg-black/50 p-2">
                <div className="carousel rounded-xl">
                    <a id={idCatcher(currentImage)} className="carousel-item w-fit" onClick={() => openImage(currentImage)}>
                        <img src={currentImage} className="cursor-pointer" />
                    </a>
                </div>
                <div className="modal-action justify-center">
                    <form method="dialog" className='space-x-10'>
                        <button type="button" className="btn btn-outline btn-sm hover:scale-110" onClick={handlePrevImage}><FaAngleDoubleLeft /></button>
                        <button className="btn btn-outline btn-accent btn-md hover:scale-110" >Cerrar</button>
                        <button type="button" className="btn btn-outline btn-sm hover:scale-110" onClick={handleNextImage}><FaAngleDoubleRight /></button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default ModalCard;

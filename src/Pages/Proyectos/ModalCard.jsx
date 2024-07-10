import React, { useState } from 'react';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

const ModalCard = (props) => {
    const { bgImage1, bgImage2, id } = props;
    const images = [bgImage1, bgImage2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const idCatcher = (str) => {
        const sections = str.split('/');
        return sections[sections.length - 1];
    }

    const openImage = (img) => {
        window.open(img, '_blank');
    };

    const handleChangeImage = (direction) => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = (prevIndex + direction + images.length) % images.length;
            return newIndex;
        });
    };

    return (
        <dialog id={id} className="modal backdrop-blur-lg">
            <div className="modal-box w-11/12 max-w-2xl bg-black/50 p-2">
                <div className="carousel rounded-xl">
                    <a id={idCatcher(images[currentImageIndex])} className="carousel-item w-fit" onClick={() => openImage(images[currentImageIndex])}>
                        <img src={images[currentImageIndex]} className="cursor-pointer" />
                    </a>
                </div>
                <div className="modal-action justify-center">
                    <form method="dialog" className='space-x-10'>
                        <button type="button" className="btn btn-outline btn-sm hover:scale-110" onClick={() => handleChangeImage(-1)}><FaAngleDoubleLeft /></button>
                        <button className="btn btn-outline btn-accent btn-md hover:scale-110" >Cerrar</button>
                        <button type="button" className="btn btn-outline btn-sm hover:scale-110" onClick={() => handleChangeImage(1)}><FaAngleDoubleRight /></button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default ModalCard;

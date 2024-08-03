import { useEffect, useState } from 'react';
import ImagesCarrouselModal from '../Modals/ImagesCarrouselModal';

const ProductCard = (props) => {
    const { productInfo, index, images, actions } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const id = String(productInfo.title + index);
    const totalImages = images.length;

    useEffect(() => {
        const startDelay = index * 1000;
        const imageInterval = setTimeout(() => {
            setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
            }, 3000);
        }, startDelay);

        return () => {
            clearTimeout(imageInterval);
        };
    }, [index, totalImages]);

    return (
        <>
            <div className={`card sd:card-side bg-black/40 shadow-xl animate-fade animate-once animate-duration-1000 animate-delay-${index * 100} animate-normal text-white`}>
                <figure onClick={() => document.getElementById(id).showModal()} className='p-4'>
                    <img
                        className='rounded-xl cursor-pointer hover:scale-95'
                        src={images[currentIndex]}
                        alt={"Proyecto " + index}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{productInfo.title}</h2>
                    <p>{productInfo.description}</p>
                    <div className="card-actions justify-end">
                        {actions}
                    </div>
                </div>
            </div>
            <ImagesCarrouselModal
                images={images}
                id={id}
            />
        </>
    );
};

export default ProductCard;

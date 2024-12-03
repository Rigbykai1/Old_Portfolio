import ImagesCarrouselModal from '../Modals/ImagesCarrouselModal';

const ProductCard = ({title, description, images, index, actions}) => {
    const id = String(title + index);
    return (
        <>
            <div className={`card sd:card-side bg-black/40 shadow-xl animate-fade animate-once animate-duration-1000 animate-delay-${index * 100} animate-normal text-white h-fit`}>
                <figure onClick={() => document.getElementById(id).showModal()} className='p-4'>
                    <img
                        className='rounded-xl cursor-pointer hover:scale-95'
                        src={images[0]}
                        alt={images[0]}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
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

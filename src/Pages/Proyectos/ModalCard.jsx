import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

const ModalCard = (props) => {
    const { bgImage1, bgImage2, id } = props;


    const idCatcher = (str) => {
        const sections = str.split('/');
        return sections[sections.length - 1];
    }

    const openImage = (img) => {
        window.open(img, '_blank');
    };

    return (
        <dialog id={id} className="modal backdrop-blur-lg">
            <div className="modal-box w-11/12 max-w-2xl bg-black/50 p-2">
                <div className="carousel rounded-xl">
                    <a id={idCatcher(bgImage1)} className="carousel-item w-fit" onClick={() => openImage(bgImage1)}>
                        <img src={bgImage1} className="cursor-pointer" />
                    </a>
                    <a id={idCatcher(bgImage2)} className="carousel-item w-fit" onClick={() => openImage(bgImage2)}>
                        <img src={bgImage2} className="cursor-pointer" />
                    </a>

                </div>
                <div className="modal-action justify-center">
                    <form method="dialog" className='space-x-10'>
                        <a href={`#${idCatcher(bgImage1)}`} className="btn btn-outline btn-sm hover:scale-110"><FaAngleDoubleLeft /></a>
                        <button className="btn btn-outline btn-accent btn-md hover:scale-110" >Cerrar</button>
                        <a href={`#${idCatcher(bgImage2)}`} className="btn btn-outline btn-sm hover:scale-110"><FaAngleDoubleRight /></a>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default ModalCard
import { FaDownload, FaGithub, FaYoutube } from "react-icons/fa";

const ProyectoImage = ({imageUrl, sourceLink, gitHubLink, youtubeLink}) => {
    return (
        <div className="flex flex-row items-center bg-black/30 p-1 rounded-xl max-w-3xl animate-fade animate-once animate-duration-700 animate-delay-400 animate-ease-in-out">
            <figure>
                <img src={imageUrl} className="size-full rounded-xl shadow-xl h-auto" />
            </figure>
            <div className="py-1 space-y-1 flex flex-col px-1">
                <a className="btn btn-outline btn-success" href={sourceLink}><FaDownload /></a>
                <a className="btn btn-outline btn-accent" href={gitHubLink}><FaGithub /></a>
                <a className="btn btn-outline btn-error" href={youtubeLink}><FaYoutube /></a>
            </div>
        </div>
    )
}

export default ProyectoImage
import { Link } from "react-router-dom"

const BigScreenBar = () => {
    return (
        <div className="w-full h-full md:max-w-sm md:h-[97vh] bg-white/10 rounded-xl backdrop-blur-md overflow-y-auto">
            <div className='flex flex-col p-3 space-y-3'>
                <Link className='flex flex-col items-center bg-black/30 rounded-lg p-2 cursor-pointer hover:scale-95 animate-fade animate-once animate-duration-500 animate-delay-200 animate-ease-in-out' to='/'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-red-500 ring-offset-base-100 ring-offset-2">
                            <img src="https://avatars.githubusercontent.com/u/129445798?v=4" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-thin text-center text-white">Jonathan Aragón</h1>
                </Link>
                <div className="mockup-code bg-black/30 text-white hover:scale-95 animate-fade animate-once animate-duration-600 animate-delay-300 animate-ease-in-out">
                    <pre data-prefix="0"><code>job = client["idea"]</code></pre>
                    <pre data-prefix="1"><code>while True:</code></pre>
                    <pre data-prefix="2"><code> Def UserTheMaker(idea):</code></pre>
                    <pre data-prefix="3"><code>    DoGoodJob()</code></pre>
                    <pre data-prefix="4"><code>    if(greatJob(job)):</code></pre>
                    <pre data-prefix="5"><code>      break</code></pre>
                </div>
            </div>
            <div className='divider' />
            <div className='flex flex-col gap-2 p-3'>
                <Link className="btn btn-outline hover:scale-105 animate-fade-right animate-once animate-duration-300 animate-delay-300 animate-ease-in-out text-white" to='/Servicios'>Servicios</Link>
                <Link className="btn btn-outline hover:scale-105 animate-fade-right animate-once animate-duration-400 animate-delay-400 animate-ease-in-out text-white" to='/Contacto'>Contacto</Link>
                <Link className="btn btn-outline glass hover:scale-105 animate-fade-right animate-once animate-duration-500 animate-delay-500 animate-ease-in-out text-white" to='/Proyectos'>Proyectos</Link>
            </div>
            <div className='divider' />
        </div>
    )
}

export default BigScreenBar
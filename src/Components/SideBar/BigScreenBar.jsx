const BigScreenBar = () => {
    return (
        <div className="w-full h-full md:max-w-sm md:h-[97vh] bg-white/10 rounded-xl backdrop-blur-md overflow-y-auto">
            <div className='flex flex-col p-3 space-y-3'>
                <a className='flex flex-col items-center bg-black/30 rounded-lg p-2 cursor-pointer hover:scale-95 animate-fade animate-once animate-duration-500 animate-delay-200 animate-ease-in-out' href='/Home'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-red-500 ring-offset-base-100 ring-offset-2">
                            <img src="https://avatars.githubusercontent.com/u/129445798?v=4" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-thin text-center">Jonathan Aragón</h1>
                </a>
                <div className="mockup-code bg-black/30 text-white hover:scale-95 animate-fade animate-once animate-duration-600 animate-delay-300 animate-ease-in-out">
                    <pre data-prefix="0"><code>while True:</code></pre>
                    <pre data-prefix="1"><code> Def UserTheMaker(idea):</code></pre>
                    <pre data-prefix="2"><code>    DoGoodJob()</code></pre>
                    <pre data-prefix="3"><code>    if(greatJob(Job)):</code></pre>
                    <pre data-prefix="4"><code>      break</code></pre>
                </div>
            </div>
            <div className='divider' />
            <div className='flex flex-col gap-2 p-3'>
                <a className="btn btn-outline hover:scale-105 animate-fade-right animate-once animate-duration-300 animate-delay-300 animate-ease-in-out" href='/SobreMi'>Sobre mí</a>
                <a className="btn btn-outline hover:scale-105 animate-fade-right animate-once animate-duration-400 animate-delay-400 animate-ease-in-out" href='/Contacto'>Contacto</a>
                <a className="btn btn-outline glass hover:scale-105 animate-fade-right animate-once animate-duration-500 animate-delay-500 animate-ease-in-out" href='/Proyectos'>Proyectos</a>
            </div>
            <div className='divider' />
        </div>
    )
}

export default BigScreenBar
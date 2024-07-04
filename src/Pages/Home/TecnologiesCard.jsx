import { SiCplusplus } from "react-icons/si";
import { FaGitAlt, FaCss3Alt, FaNodeJs, FaJsSquare, FaReact, FaPython } from "react-icons/fa";

const TecnologiesCard = () => {
    return (
        <div className='bg-black/20 rounded-lg p-6 h-full w-fit hover:scale-105 animate-fade animate-once animate-duration-200 animate-delay-200 animate-normal'>
            <h1 className='text-3xl py-3 font-bold text-emerald-400'>Tecnologías</h1>
            <div className="mockup-code">
                <pre data-prefix="$"><code>Node Js</code></pre>
                <pre data-prefix=">" className="text-warning"><code>Tailwind CSS</code></pre>
                <pre data-prefix=">" className="text-success"><code>JavaScript</code></pre>
                <pre data-prefix=">" className="text-success"><code>C++</code></pre>
                <pre data-prefix=">" className="text-success"><code>Python</code></pre>
                <pre data-prefix=">" className="text-success"><code>Git</code></pre>
                <pre data-prefix=">" className="text-success"><code>React</code></pre>
                <pre data-prefix=">" className="text-success"><code>MongoDB</code></pre>
                <pre data-prefix=">" className="text-success"><code>Git</code></pre>
                <div className='divider' />
                <div className='flex justify-center flex-wrap gap-3 p-6'>
                    <a href='https://nodejs.org/en'>
                        <FaNodeJs className='size-8 hover:scale-125 cursor-pointer' />
                    </a>
                    <a href='https://tailwindcss.com/'>
                        <FaCss3Alt className='size-8 hover:scale-125 cursor-pointer' />
                    </a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
                        <FaJsSquare className='size-8 hover:scale-125 cursor-pointer' />
                    </a>
                    <a href='https://cplusplus.com/doc/tutorial/'>
                        <SiCplusplus className='size-8 hover:scale-125 cursor-pointer' />
                    </a>
                    <a href='https://www.python.org/'>
                        <FaPython className='size-8 hover:scale-125 cursor-pointer' />
                    </a>
                    <a href='https://git-scm.com/'>
                        <FaGitAlt className='size-8 hover:scale-125 cursor-pointer' />
                    </a>
                    <a href='https://react.dev/'>
                        <FaReact className='size-8 hover:scale-125 cursor-pointer' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TecnologiesCard
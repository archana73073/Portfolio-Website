import React from 'react'

const ProjectCard=({title, description,image,tech, demo, code})=>{
    return(
        <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer flex flex-col h-full'>
           <img src={image} alt={title} className='w-full h-60 object-cover' />
           <div className='p-6 flex flex-col flex-1'>
             <h3 className='text-xl font-bold mb-2'>{title}</h3>
             <p className='text-gray-400 mb-4 min-h-[96px]'>{description}</p>
             <div className='flex flex-wrap gap-2 mb-6'>
                {tech.map((item, index)=>(
                    <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>
                        {item}
                    </span>
                ))}
             </div>
             {/* for buttoms view code and demo */}
             <div className='mt-auto'>
                <div className='flex gap-2'>
                
                <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 bg-[#12F7D6] rounded-lg font-medium hover:bg-[#12F7D6]/20 transition duration-300">
                    View Demo 
                </a>

                <a
                 href={code}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex-1 text-center px-4 py-2 rounded-lg font-medium hover:bg-[#12F7D6]/20 transition duration-300 border border-[#12F7D6]"
                >Code</a>
                 </div>
             </div>
             

           </div>
        </div>
    )
}
export default ProjectCard
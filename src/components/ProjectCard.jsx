import React, { useState } from 'react';
import { RotateCw } from 'lucide-react';

const ProjectCard=({title, description,image,tech, demo, code})=>{
    const[flip, setflip]=useState(false);
    return(
        // <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer flex flex-col h-full'>
        //    <img src={image} alt={title} className='w-full h-60 object-cover' />
        //    <div className='p-6 flex flex-col flex-1'>
        //      <h3 className='text-xl font-bold mb-2'>{title}</h3>
        //      <p className='text-gray-400 mb-4 min-h-[96px]'>{description}</p>
        //      <div className='flex flex-wrap gap-2 mb-6'>
        //         {tech.map((item, index)=>(
        //             <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>
        //                 {item}
        //             </span>
        //         ))}
        //      </div>
        //      {/* for buttoms view code and demo */}
        //      <div className='mt-auto'>
        //         <div className='flex gap-2'>
                
        //         <a
        //         href={demo}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         className="flex-1 text-center px-4 py-2 bg-[#12F7D6] text-[#081018]  rounded-lg font-medium  transition duration-300">
        //             View Demo 
        //         </a>

        //         <a
        //          href={code}
        //          target="_blank"
        //          rel="noopener noreferrer"
        //          className="flex-1 text-center px-4 py-2 rounded-lg font-medium hover:bg-[#12F7D6] hover:text-[#081018] transition duration-300 border border-[#12F7D6] text-[#12F7D6]"
        //         >Code</a>
        //          </div>
        //      </div>
             

        //    </div>
        // </div>

        <div className='relative h-[360px] w-full perspective'>
            <div className={`relative h-full w-full duration-700 preserve-3d ${
            flip ? "rotate-y-180" : ""
            }`}
            >
                {/* ----------front----------- */}
                <div className='absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-[#0D1723] border border-[#1c2a38] hover:border-[#12F7D6] hover:-translate-y-2 transition-all duration-300 shadow-lg'>
                    {/* flip buttom */}
                    <button 
                        onClick={()=> setflip(true)}
                        className='absolute top-4 right-4 w-10 h-10 rounded-full bg-[#081018]/80 flex items-center justify-center text-[#12F7D6] hover:rotate-180 duration-500 z-10'
                        >
                        <RotateCw size={16}/>
                    </button>

                    {/* image */}
                    <img
                     src={image}
                     alt={title}
                     className='w-full h-[260px] object-cover'
                    />
                    {/* title  */}
                    <div className='p-5'>
                        <h3 className='text-2xl font-bold text-white'>{title}</h3>
                    </div>
                </div>
                {/* ----------back---------- */}
                <div className='absolute inset-0 rotate-y-180 backface-hidden rounded-2xl bg-[#101B27] border border-[#12F7D6] p-6 flex flex-col'>
                    {/* flip back */}
                    <button
                    onClick={()=> setflip(false)}
                    className='absolute top-4 right-4 w-10 h-10 rounded-full bg-[#081018]/80 flex items-center justify-center text-[#12F7D6] hover:rotate-180 duration-500'
                    >
                        <RotateCw size={16}/>
                    </button>

                    {/* content  */}
                    <div className='flex-1'>
                        <h2 className='text-white text-2xl font-bold mb-5'>{title}</h2>

                        <div className='space-y-4'>
                            {/* description */}
                            <div>
                                <p className='text-[#12F7D6] font-semibold mb-1'>
                                    Description :
                                </p>
                                <p className='text-gray-300 text-sm leading-6'>
                                   {description}
                                </p>
                            </div>
                            {/* technologies */}
                            <div>
                                <p className='text-[#12F7D6] font-semibold mb-3'>
                                    Technologies :
                                </p>
                                <div className='flex flex-wrap justify-start gap-2'>
                                    {tech.map((item, index)=>(
                                        <span 
                                           key={index}
                                           className='px-3 py-1 rounded-full border border-[#12F7D6] text-[#12F7D6] text-sm'
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* buttons */}
                    <div className="flex gap-4 mt-6">

            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 rounded-lg bg-[#12F7D6] text-[#081018] font-semibold hover:scale-105 duration-300"
            >
              View Demo
            </a>

            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 rounded-lg border border-[#12F7D6] text-[#12F7D6] hover:bg-[#12F7D6] hover:text-[#081018] duration-300 font-semibold"
            >
              Code
            </a>
            </div>


                </div>
            </div>
        </div>
    )
}
export default ProjectCard
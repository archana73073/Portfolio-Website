import React from 'react'
import {motion} from 'framer-motion'
import {FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone} from "react-icons/fa"
import {SiGeeksforgeeks, SiLeetcode} from "react-icons/si"

const Contact=()=>{
    return(
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView ={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeOut'}}
        viewport={{once:false, amount:0.2}}
        id='contact'
        className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>Get In <span className='text-[#12F7D6]'>Touch</span></h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>Let's connect and build something amazing together</p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {/* contact form */}
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                <input 
                                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                                type="text" />
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                                <input 
                                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                                type="email" />
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                                <textarea
                                className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none'
                                type="text" />
                            </div>
                            <button type='submit' className='w-full px-6 py-3 bg-[#12F7D6] rounded-lg font-medium hover:bg-[#12F7D6]/20 transition duration-300 cursor-pointer'>Send Your Message</button>
                        </form>
                    </div>
                    {/* contact information */}
                    {/* Location */}
                    <div className='space-y-8'>
                        <div className='flex items-start'>
                           <div className='text-[#12F7D6] text-2xl mr-4'>
                              <FaMapMarkerAlt/>
                           </div>
                           <div>
                             <h3 className='text-lg font-semibold mb-2 '>Location</h3>
                             <p className='text-gray-400'>Greater Noida , Uttar Pradesh</p>
                           </div>
                        </div>

                        {/* email address */}
                        <div className='flex items-start'>
                           <div className='text-[#12F7D6] text-2xl mr-4'>
                              <FaEnvelope/>
                           </div>
                           <div>
                             <h3 className='text-lg font-semibold mb-2 '>Email</h3>
                             <p className='text-gray-400'>archanaverma96214@gmail.com</p>
                           </div>
                        </div>

                        {/* mobile number */}
                        <div className='flex items-start'>
                           <div className='text-[#12F7D6] text-2xl mr-4'>
                              <FaPhone className='rotate-90'/>
                           </div>
                           <div>
                             <h3 className='text-lg font-semibold mb-2 '>Phone</h3>
                             <p className='text-gray-400'>+91 7307087464</p>
                           </div>
                        </div>

                        {/* follow me */}
                        <div className='pt-4'>
                             <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                             <div className='flex space-x-4'>
                                <a href="https://github.com/archana73073" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-[#12F7D6] hover:bg-[#12F7D6] hover:text-white transition duration-300'>
                                     <FaGithub/>
                                </a>

                                <a href="https://www.linkedin.com/in/archana-verma-av123/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-[#12F7D6] hover:bg-[#12F7D6] hover:text-white transition duration-300'>
                                     <FaLinkedin/>
                                </a>

                                <a href="https://leetcode.com/u/archanaverma73070/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-[#12F7D6] hover:bg-[#12F7D6] hover:text-white transition duration-300'>
                                     <SiLeetcode/>
                                </a>

                                <a href="https://www.geeksforgeeks.org/profile/archanaveh3e4?tab=activity" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-[#12F7D6] hover:bg-[#12F7D6] hover:text-white transition duration-300'>
                                     <SiGeeksforgeeks/>
                                </a>
                            </div>
                        </div>
                 
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Contact
import React,{useState} from 'react'
import {motion} from 'framer-motion'
import {certificateData} from '../../assets/assets'
import CertificateCard from "./CertificateCard"
import { FaArrowRight,FaArrowUp } from "react-icons/fa";

const Certificate=()=>{
    const [showAll, setShowAll] = useState(false);
    return(
        <motion.div
                initial={{opacity:0, y:50}}
                whileInView ={{opacity:1, y:0}}
                transition={{duration:1, ease:'easeOut'}}
                viewport={{once:false, amount:0.2}}
                id='certificate'
                className='py-20 bg-[#0D1723]'
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className='text-center mb-16'>
                    <h2 className='text-3xl font-bold text-center mb-4'>My<span className='text-[#12F7D6]'> Certifications</span></h2>
                   <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>Showcasing my certifications and continuous learning in technology.</p>   
                </div>
                {/* certificate grid */}
                <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
                    {/* {certificateData.map((certificate)=>(
                        <CertificateCard
                        key={certificate.id}
                        certificate={certificate}
                        />
                    ))} */}

                    {(showAll ? certificateData : certificateData.slice(0, 3)).map((certificate) => (
                            <CertificateCard
                            key={certificate.id}
                            certificate={certificate}
                            />
                    ))}



                </div>

                {/* <div className='text-center mt-12'>
                <a href="#" className='inline-flex items-center px-6 py-3 border border-[#12F7D6] rounder-lg font-medium hover:bg-[#12F7D6]/20 tarnsition duration-300 '>
                    <span>View More Projects  </span>
                    <FaArrowRight className='ml-2'/>

                </a>
                </div>  */}
                
                <div className="text-center mt-12">
                 {showAll ? (
                 <button
                   onClick={() => setShowAll(false)}
                   className="inline-flex items-center px-6 py-3 border border-[#12F7D6] hover:text-[#081018] rounded-lg font-medium hover:bg-[#12F7D6] transition duration-300"
                 >
                  <span>View Less</span> 
                  <FaArrowUp className="ml-2" />

                 </button>
                 ) : (
                 certificateData.length > 3 && (
                 <button
                   onClick={() => setShowAll(true)}
                   className="inline-flex items-center px-6 py-3 border border-[#12F7D6] rounded-lg font-medium hover:bg-[#12F7D6] hover:text-[#081018] transition duration-300"
                 >
                <span>View More Certificates</span>
                <FaArrowRight className="ml-2" />
                </button>
                )
               )}
                </div>
            </div>

        </motion.div>

    )
}
export default Certificate
import React, { useState } from "react";
import { RotateCw } from "lucide-react";

const CertificateCard = ({ certificate }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className="relative h-[340px] w-full perspective"
    >
      <div
        className={`relative h-full w-full duration-700 preserve-3d ${
        flip ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}

        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-[#081018] hover:border-[#12F7D6]   border border-[#1c2a38]   hover:-translate-y-2 transition-all duration-300 shadow-lg">

          {/* Flip Icon */}

          <button
            onClick={() => setFlip(true)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#081018]/80 flex items-center justify-center text-[#12F7D6] cursor-pointer hover:rotate-180 duration-500"
          >
            <RotateCw size={15} />
          </button>

          {/* Certificate Image */}

          <img
            src={certificate.image}
            alt={certificate.title}
            // className="w-full h-[300px] object-cover"
            className="w-full h-[220px] object-contain bg-white p-2"
          />

          {/* Bottom */}

          <div className="p-5">

            <h3 className="text-white text-xl font-semibold">
              {certificate.title}
            </h3>

          </div>

        </div>

        {/* BACK */}

        <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl bg-[#101B27] border border-[#12F7D6] p-6 flex flex-col justify-between">

          {/* Flip Back */}

          <button
            onClick={() => setFlip(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#081018]/80 flex items-center justify-center text-[#12F7D6] hover:rotate-180 duration-500"
          >
            <RotateCw size={15} />
          </button>

          <div>

            <h2 className="text-white text-2xl font-bold mb-6">
              {certificate.title}
            </h2>

            <div className="space-y-4 text-gray-300">

              <p>
                <span className="text-[#12F7D6] font-semibold">
                  Organization :
                </span>{" "}
                {certificate.organization}
              </p>

              {/*Ai for all  */}
              {certificate.id===2 &&(
              <>
              <p>
                <span className="text-[#12F7D6] font-semibold">
                  Program :
                </span>{" "}
                {certificate.program}
              </p>

              <p>
                <span className="text-[#12F7D6] font-semibold">
                  Date :
                </span>{" "}
                {certificate.date}
              </p>

              </>
              )}

              
             {/* nptel */}
             {certificate.id==1 && (
              <>
              <p>
                <span className="text-[#12F7D6] font-semibold">
                  Duration :
                </span>{" "}
                {certificate.duration}
              </p>
              <p>
                <span className="text-[#12F7D6] font-semibold">
                  Score :
                </span>{" "}
                {certificate.score}
              </p>

              </>
              )}

              {/*dbms infosys*/}
              {certificate.id===3 &&(
              <>
              

              <p>
                <span className="text-[#12F7D6] font-semibold">
                  Date :
                </span>{" "}
                {certificate.date}
              </p>

              </>
              )}

              {/*Ai Tools Workshop*/}
              {certificate.id===4 &&(
              <>
              <p>
                <span className="text-[#12F7D6] font-semibold">
                  Date :
                </span>{" "}
                {certificate.date}
              </p>

              </>
              )}


            {/*HTML CSS Js Workshop */}
              {certificate.id===5 &&(
              <>
              
              <p>
                <span className="text-[#12F7D6] font-semibold">
                  Date :
                </span>{" "}
                {certificate.date}
              </p>

              </>
              )}




              
              

            </div>

          </div>

          {/* Buttons */}

          <div className="flex gap-4">

            <a
              href={certificate.view}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-3 rounded-lg bg-[#12F7D6] text-[#081018] font-semibold hover:scale-105 duration-300"
            >
              View
            </a>

            {/* <a
              href={certificate.download}
              download
              className="flex-1 text-center py-3 rounded-lg border border-[#12F7D6] text-[#12F7D6] hover:bg-[#12F7D6] hover:text-[#081018] duration-300"
            >
              Download
            </a> */}

          </div>

        </div>

      </div>
    </div>
  );
};

export default CertificateCard;
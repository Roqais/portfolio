import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon from react-icons

import c1 from '../assets/certificates/c1.png'
import c2 from '../assets/certificates/c2.png'
import c3 from '../assets/certificates/c3.png'
import c4 from '../assets/certificates/c4.png'
import c5 from '../assets/certificates/c5.png'


const certificates = [
  { id: 1, title: "Foundation of Cybersecurity", imgSrc: c1 },
  { id: 2, title: "Manage Security Risks", imgSrc: c2 },
  { id: 3, title: "Connect and Protect: Network Security", imgSrc: c3 },
  { id: 4, title: "Tools of the Trade: Linux and SQL", imgSrc: c4 },
  { id: 5, title: "Introduction to Ethical Hacking", imgSrc: c5 },
];

const CertificateGallery = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeEnlargedView = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <div className="bg-gray-800 text-white" >
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col justify-center items-center text-center mt-10">
            <h1 className="text-4xl uppercase tracking-tight font-bold">Certificates</h1>
            <p className="mt-2 tracking-tight font-light">A showcase of my professional achievements and credentials.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mt-6 mb-10">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="w-96 cursor-pointer text-center transition-transform duration-200 transform hover:scale-105"
                onClick={() => handleCertificateClick(certificate)}
              >
                <img
                  src={certificate.imgSrc}
                  alt={certificate.title}
                  className="w-88 h-[40vh] rounded-lg"
                />
                <p className="mt-2 font-bold ">{certificate.title}</p>
              </div>
            ))}
          </div>

          {selectedCertificate && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
              <div className="relative flex flex-col items-center">
                <button
                  onClick={closeEnlargedView}
                  className="absolute top-1 right-1 text-red-500 text-3xl p-1"
                >
                  <FaTimes />
                </button>
                <img
                  src={selectedCertificate.imgSrc}
                  alt={selectedCertificate.title}
                  className="w-auto h-[80vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CertificateGallery;

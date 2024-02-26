import React from "react";
import Image from "next/image";
import { FiCode, FiLink } from "react-icons/fi"; 

const ProjectCard = ({ title, description, githubLink, productionLink, techUsed, imageUrl }) => {
  return (
    <div className="w-full px-4">
      <div className="my-8">
        <div className="bg-white rounded-md p-6 border border-gray-200 shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">{description}</p>
          {imageUrl && (
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-md">
              <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-md" />
            </div>
          )}
          <div className="flex flex-wrap mb-4"> 
            <strong className="mr-2 text-gray-600">Tecnologias utilizadas:</strong>
            {techUsed.map((tech, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-4"> 
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 flex items-center hover:bg-blue-900"
            >
              <FiCode className="mr-2" />
              <span>Ver Código Fonte</span>
            </a>
            {productionLink && (
              <a
                href={productionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white py-2 px-4 rounded-md transition duration-300 flex items-center hover:bg-orange-600"
              >
                <FiLink className="mr-2" />
                <span>Ver em Produção</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

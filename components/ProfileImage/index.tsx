import React from "react";
import Image from "next/image";

const ProfileImage = ({ src, alt }) => {

  return (
    <div className="relative mb-4 w-48 h-48 md:w-70 md:h-70 overflow-hidden rounded-full transition-transform transform mx-auto md:mx-0">
        <Image
          src={src}
          alt={alt}
          width={150}
          height={150}
          className="object-cover w-full h-full rounded-full"
          onError={(e) => console.error("Erro ao carregar imagem:", e)}
        />
    </div>
  );
};

export default ProfileImage;

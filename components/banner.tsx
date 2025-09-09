// app/banner.tsx
import Image from "next/image";

export default function Banner() {
  return (
    <div style={{ position: "relative", width: "100%", height: "550px", overflow: "hidden" }} className="flex items-center justify-center">
      <Image
        src="/banner.jpg"
        alt="Imagem horizontal"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div> 
      <h2 className="text-4xl text-white font-bold z-50">
        Encontre sua casa dos sonhos e viva a 
        tranquilidade que você merece
      </h2>
    </div>
  );
}

// app/banner.tsx
import Image from "next/image";

export default function Banner() {
  return (
    <div style={{ position: "relative", width: "100%", height: "300px", overflow: "hidden" }}>
      <Image
        src="/casa-body.jpg"
        alt="Imagem horizontal"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority
      />
      <h2
        style={{
          position: "absolute",
          top: "70px",
          left: "35%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          margin: 0,
          padding: 0,
          textAlign: "center",
          zIndex: 10,
          whiteSpace: "pre-line",
        }}
      >
        {`Encontre sua casa dos sonhos e viva a 
        tranquilidade que você merece`}
      </h2>
    </div>
  );
}

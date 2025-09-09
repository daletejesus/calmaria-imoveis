import { GeneralTitle } from "./texts";
import Link from "next/link";
import Image from "next/image";

interface PropertyCardProps {
  id: string;
  price: string;
  place: string;
  title: string;
  beds: number;
  baths: number;
  area: string;
  imagem: string;
}

interface TextItemProps {
  description: string;
}

export default function BoxImovel({
  id,
  price,
  place,
  title,
  beds,
  baths,
  area,
  imagem
}: PropertyCardProps) {
  return (
    <div className="relative w-[420px] h-[420px] rounded-2xl flex flex-col place-content-between p-4 overflow-hidden">
      <Image 
        src={imagem || "/house1.jpg"} 
        alt="Imagem do imóvel" 
        width={400} 
        height={250} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div> 

      <div className="relative z-10 flex gap-2">
          <TextItem description={price}/>
          <TextItem description={place}/>
      </div>
      
      <div className="relative z-10 flex flex-col gap-2">
          <div>
              <Link className="cursor-pointer" href={`imovel/${id}`}><GeneralTitle text={title}/></Link>
          </div>
          <div className="flex">
              {beds} {beds == 1 ? 'quarto':'quartos'} • {baths} {baths == 1 ? 'banheiro':'banheiros'} • {area}
          </div>
      </div>
    </div>
  );
}

export function TextItem({description}: TextItemProps) {
  return (
    <div className="px-4 py-2 rounded-full bg-white text-black text-md">
      {description}
    </div>
  );
}
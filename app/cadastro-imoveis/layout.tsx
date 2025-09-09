import HeaderPaginaSobreNos from "@/components/Header";
import Footer from "@/components/Footer";

export default function ImovelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow flex items-center justify-center bg-white" style={{ padding: '80px' }}>
      {children}
    </div>
  );
}


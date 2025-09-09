export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center bg-white p-20">
      {children}
    </div>
  );
}

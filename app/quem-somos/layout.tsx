export default function QuemSomosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {children}
    </div>
  );
}
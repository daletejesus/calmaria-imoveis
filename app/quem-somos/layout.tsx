export default function QuemSomosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen p-6 mt-22">
      {children}
    </div>
  );
}
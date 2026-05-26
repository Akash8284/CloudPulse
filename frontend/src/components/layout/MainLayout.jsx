import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#0f172a]">
      <Sidebar />

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
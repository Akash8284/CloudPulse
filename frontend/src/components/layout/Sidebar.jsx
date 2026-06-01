import { useEffect, useState } from "react";

const Sidebar = () => {

  const [activeSection, setActiveSection] =
    useState("dashboard");

  const menuItems = [
    {
      name: "Dashboard",
      id: "dashboard",
    },
    {
      name: "Metrics",
      id: "metrics",
    },
    {
      name: "Alerts",
      id: "alerts",
    },
    {
      name: "Recommendations",
      id: "recommendations",
    },
  ];

  const scrollToSection = (id) => {

    const section =
      document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }
  };

  useEffect(() => {

    const handleScroll = () => {

      const sections =
        menuItems.map((item) => ({
          id: item.id,
          element:
            document.getElementById(item.id),
        }));

      const currentSection =
        sections.find((section) => {

          if (!section.element) return false;

          const rect =
            section.element.getBoundingClientRect();

          return (
            rect.top <= 150 &&
            rect.bottom >= 150
          );
        });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  return (

    <div className="w-64 bg-[#071028] border-r border-[#1e293b] flex flex-col justify-between p-6 sticky top-0 h-screen">

      <div>

        <h1 className="text-4xl font-bold text-white mb-14">
          Cloud<span className="text-purple-500">
            Pulse
          </span>
        </h1>

        <div className="space-y-4">

          {menuItems.map((item, index) => (

            <div
              key={index}
              onClick={() =>
                scrollToSection(item.id)
              }
              className={`
                px-4 py-4 rounded-2xl cursor-pointer transition duration-300 text-lg
                ${
                  activeSection === item.id
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:bg-[#111c44] hover:text-white"
                }
              `}
            >

              {item.name}

            </div>

          ))}

        </div>

      </div>

      <div className="bg-[#111c44] rounded-2xl p-4 flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
          A
        </div>

        <div>

          <h3 className="text-white font-semibold">
            Akash
          </h3>

          <p className="text-gray-400 text-sm">
            Cloud Engineer
          </p>

        </div>

      </div>

    </div>
  );
};

export default Sidebar;
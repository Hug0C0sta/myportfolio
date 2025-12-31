import { useTranslation } from "react-i18next";
import Me from "../assets/me.png";
import MenuDigital from "../assets/menu-digital.png";
import TravizcoSite from "../assets/travizco-site.png";
import AppPos from "../assets/apppos.png";
import { useNavigate } from "react-router";
import { useState } from "react";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const projects = [
    {
      title: "Travizco - Digital Menu",
      description: t("menuDigitalDescription"),
      image: MenuDigital,
    },
    {
      title: "Travizco WebSite",
      description: t("travizcoDescription"),
      image: TravizcoSite,
    },
    {
      title: "AppPos",
      description: t("appPosDescription"),
      image: AppPos,
    },
  ];

  const experience = [
    {
      company: "ImpactZero",
      role: "Frontend Developer",
      description: t("impactZeroDescription"),
    },
    {
      company: "FIS",
      role: "Frontend Developer",
      description: t("fisDescription"),
    },
    {
      company: "eDreams ODIGEO",
      role: `Frontend Developer (${t("academicProject")})`,
      description: t("edreamsDescription"),
    },
    {
      company: "Tlantic",
      role: `Frontend Developer (${t("academicProject")})`,
      description: t("tlanticDescription"),
    },
  ];

  const [selectedExperince, setSelectedExperince] = useState(0);

  return (
    <div className="flex flex-col space-y-18 md:space-y-40 lg:py-20 ">
      <div className="flex flex-col lg:flex-row md:justify-between items-center h-full space-y-10">
        <div className="flex flex-col justify-center space-y-2">
          <h4 className="font-thin text-lg md:text-xl">
            {t("helloIntroducion")} 👋🏼
          </h4>
          <h1 className="font-extrabold text-6xl md:text-8xl text-stone-800">
            <span className="text-purple-800">Front</span>end
            <br />
            Developer<span className="text-purple-800">.</span>
          </h1>
          <h3 className="text-stone-500 text-lg md:text-xl max-w-xl">
            {t("introduction")}
          </h3>
          <div className="flex space-x-4 md:pt-10">
            <button
              type="button"
              onClick={() => {
                window.location.href = "mailto:viaeshugo@gmail.com";
              }}
              className="bg-black text-white rounded-xl px-4 py-3 text-sm shadow-xl font-semibold transition-colors hover:bg-gray-800"
            >
              {t("contact")}
            </button>
            <button
              type="button"
              onClick={() => {
                navigate("/projects");
              }}
              className="bg-[#ECECEE] rounded-xl px-4 py-3 text-sm shadow-xl font-semibold transition-colors hover:bg-[#dadae0]"
            >
              {t("browseProjects")}
            </button>
          </div>
        </div>
        <div className="md:border rounded-full md:p-20 md:shadow-md md:bg-[#ECECEE]">
          <img src={Me} alt="me" className="h-80 min-w-60" />
        </div>
      </div>
      <div className="flex flex-col space-y-6 md:space-y-10">
        <h1 className="text-stone-800 font-extrabold text-4xl md:text-6xl">
          {t("projects")}
          <span className="text-purple-800">.</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <img
                src={item.image}
                className="w-full h-[32vh] object-contain rounded-xl bg-[#ECECEE] shadow-sm"
                alt={item.title}
              />
              <div className="flex flex-col gap-2 grow">
                <h4 className="text-xl md:text-2xl font-extrabold line-clamp-1">
                  {item.title}
                  <span className="text-purple-800">.</span>
                </h4>
                <p className="text-stone-600 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-10">
        <h1 className="text-stone-800 font-extrabold text-4xl md:text-6xl">
          {t("experience")}
          <span className="text-purple-800">.</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col space-y-6">
            {experience.map((item, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setSelectedExperince(index)}
                className="flex space-x-4 cursor-pointer"
              >
                <div
                  className={`w-1 h-full ${
                    selectedExperince === index
                      ? "bg-purple-800"
                      : "bg-stone-600"
                  }`}
                ></div>
                <h5
                  className={`text-2xl font-semibold whitespace-nowrap ${
                    selectedExperince === index
                      ? "text-purple-800"
                      : "text-stone-600"
                  }`}
                >
                  {item.company}
                </h5>
              </button>
            ))}
          </div>
          <div className="flex flex-col">
            <p className="text-purple-800 font-light">
              {experience[selectedExperince].role}
            </p>
            <h4 className="font-bold text-3xl md:text-4xl">
              {experience[selectedExperince].company}
            </h4>
            <p className="text-stone-600 font-light mt-8 md:text-lg">
              {experience[selectedExperince].description}
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;

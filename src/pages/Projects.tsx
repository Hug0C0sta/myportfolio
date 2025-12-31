import MenuDigital from "../assets/menu-digital.png";
import TravizcoSite from "../assets/travizco-site.png";
import AppPos from "../assets/apppos.png";
import { Trans, useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

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
  return (
    <div className="lg:py-20 flex flex-col space-y-6 h-full">
      <h1 className="text-stone-800 font-extrabold text-6xl md:text-8xl">
        <Trans
          i18nKey="projectsTitle"
          components={[<span key="0" className="text-purple-800" />]}
        />{" "}
        <span className="text-purple-800">.</span>
      </h1>
      <div className="flex">
        <div className="h-full w-2 bg-purple-800 mr-4"></div>
        <p className="lg:text-2xl text-xl text-stone-500 font-light">
          {t("projectsLabel")}
        </p>
      </div>

      <div>
        <ul className="list-none flex flex-col gap-28">
          {projects.map((item, index) => (
            <li
              key={index}
              id={`card${index + 1}`}
              className="sticky top-0 md:top-10 bg-white min-h-dvh flex flex-col"
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="flex flex-col grow gap-8 pb-20">
                <img
                  src={item.image}
                  className="w-full max-h-[60vh] object-contain rounded-xl bg-[#ECECEE] shadow-sm"
                  alt={item.title}
                />
                <div className="flex flex-col gap-4 grow">
                  <h4 className="text-4xl md:text-6xl font-extrabold">
                    {item.title}
                    <span className="text-purple-800">.</span>
                  </h4>
                  <p className="text-stone-600 text-xl ">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;

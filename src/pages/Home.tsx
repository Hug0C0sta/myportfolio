import { useTranslation } from "react-i18next";
import Me from "../assets/me.png";
import { useNavigate } from "react-router";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
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
  );
}

export default Home;

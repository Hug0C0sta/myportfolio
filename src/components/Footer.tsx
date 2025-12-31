import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-between md:items-end gap-20 py-10 ">
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-semibold">
          Tens interesse em que trabalhe contigo
          <span className="text-purple-800">?</span>
        </h4>
        <div className="flex space-x-4 ">
          <button
            type="button"
            onClick={() => {
              window.location.href = "mailto:viaeshugo@gmail.com";
            }}
            className="bg-purple-800 text-white rounded-xl px-4 py-3 text-sm shadow-xl font-semibold transition-colors hover:bg-gray-800"
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
      <p className="text-stone-400 font-light text-lg">Hugo Costa 2026</p>
    </div>
  );
}

export default Footer;

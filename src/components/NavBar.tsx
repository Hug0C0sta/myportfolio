import { useState } from "react";
import { FileUser, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import enCV from "../assets/cv-en.pdf";
import ptCV from "../assets/cv-pt.pdf";

function NavBar() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("projects"), href: "/projects" },
    { name: t("about"), href: "/about" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = (path: string) =>
    pathname === path
      ? "text-purple-700"
      : "text-stone-500 transition-colors hover:text-stone-600";

  const handleDownloadCV = () => {
    const cvFile = i18n.language.startsWith("pt") ? ptCV : enCV;
    const fileName = "CV_HugoCosta.pdf";

    const link = document.createElement("a");
    link.href = cvFile;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex justify-between items-center w-full relative">
      <Link className="font-bold text-stone-800" to="/">
        HugoCosta<span className="text-purple-800 text-xl">.</span>
      </Link>

      <ul className="hidden list-none m-0 p-0 md:flex gap-6 font-semibold text-lg">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link to={item.href} className={getLinkClass(item.href)}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex gap-2">
        <Button
          size="icon"
          onClick={() => {
            window.location.href = "mailto:viaeshugo@gmail.com";
          }}
        >
          <Mail />
        </Button>
        <Button variant="outline" onClick={handleDownloadCV}>
          <FileUser /> Download CV
        </Button>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-50 p-2 bg-stone-800 hover:bg-stone-600 rounded-full transition-colors"
      >
        {isOpen ? (
          <X size={16} color="white" />
        ) : (
          <Menu size={16} color="white" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden">
          <ul className="list-none flex flex-col items-center gap-8 font-bold text-3xl">
            {navItems.map((item) => (
              <li key={item.href} onClick={() => setIsOpen(false)}>
                <Link to={item.href} className={getLinkClass(item.href)}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="p-4 bg-black rounded-full"
                onClick={() => {
                  window.location.href = "mailto:viaeshugo@gmail.com";
                  setIsOpen(false);
                }}
              >
                <Mail size={24} color="white" />
              </button>
            </li>
            <li>
              <Button variant="outline" onClick={handleDownloadCV}>
                <FileUser /> Download CV
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

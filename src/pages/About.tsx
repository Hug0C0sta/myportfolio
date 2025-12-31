import { Globe } from "@/components/ui/globe";
import { Star } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trans, useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const ScrollingRow = ({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) => (
  <div className="flex overflow-hidden py-2 group">
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .marquee-content {
        display: flex;
        width: max-content;
        animation: marquee 25s linear infinite;
      }
      .marquee-content.reverse {
        animation-direction: reverse;
      }
      .group:hover .marquee-content {
        animation-play-state: paused;
      }
    `}</style>

    <div className={`marquee-content gap-4 ${reverse ? "reverse" : ""}`}>
      {[...items, ...items].map((item, index) => (
        <div key={index} className="flex items-center">
          <Star className="text-purple-800" />
          <span className="mx-2 px-4 py-2 text-sm font-light bg-stone-900 rounded-xl shadow-sm text-white whitespace-nowrap">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
);

interface StrongProps {
  children?: ReactNode;
}

const Strong = ({ children }: StrongProps) => (
  <strong className="text-purple-800">{children}</strong>
);

function About() {
  const { t } = useTranslation();

  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    barsRef.current.forEach((bar) => {
      if (bar) {
        gsap.fromTo(
          bar,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: bar,
              start: "top 80%",
              end: "bottom 70%",
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const techs = [
    "HTML / CSS",
    "React",
    "Vue",
    "Flutter",
    "JavaScript",
    "TypeScript",
  ];
  const softSkills = [
    t("teamCollaboration"),
    t("fastLearner"),
    t("activeListening"),
    t("criticalThinking"),
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

  return (
    <div className="lg:py-20 flex flex-col space-y-6">
      <h1 className="text-stone-800 font-extrabold text-6xl md:text-8xl ">
        {t("about")}
        <span className="text-purple-800">.</span>
      </h1>

      <div className="flex">
        <div className="h-full w-2 bg-purple-800 mr-4"></div>
        <p className="lg:text-2xl text-xl text-stone-500 font-light">
          {t("aboutMeSubTitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-10">
        <div className="flex flex-col space-y-4">
          <h4 className="text-2xl font-bold">{t("myStack")}.</h4>
          <div className="relative border border-zinc-300 bg-zinc-200 rounded-xl h-64 flex flex-col justify-center overflow-hidden">
            <ScrollingRow items={techs} />
            <ScrollingRow items={softSkills} reverse={true} />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-zinc-200 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-zinc-200 to-transparent"></div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:col-span-2">
          <h4 className="text-2xl font-bold">{t("myStack")}.</h4>
          <div className="relative border border-zinc-300 bg-zinc-200 rounded-xl h-64 overflow-hidden">
            <Globe />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-12 mt-10">
        <h2 className="text-stone-800 font-extrabold text-4xl md:text-5xl">
          {t("myStory")}
          <span className="text-purple-800">.</span>
        </h2>
        <div className="text-lg md:text-xl text-stone-500 font-light space-y-4">
          <p>
            <Trans
              i18nKey="aboutMeParagraph1"
              components={[<Strong key="0" />, <Strong key="1" />]}
            />
          </p>

          <p>
            <Trans
              i18nKey="aboutMeParagraph2"
              components={[<Strong key="0" />, <Strong key="1" />]}
            />
          </p>

          <p>
            <Trans
              i18nKey="aboutMeParagraph3"
              components={[<Strong key="0" />]}
            />
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-12 my-20">
        <h2 className="text-stone-800 font-extrabold text-4xl md:text-5xl">
          {t("myExperience")}
          <span className="text-purple-800">.</span>
        </h2>
        <div className="flex flex-col space-y-28">
          {experience.map((item, index) => (
            <div key={index} className="flex space-x-12">
              <div>
                <p className="text-stone-800 font-extrabold text-4xl md:text-7xl">
                  0{index + 1}
                </p>
                <div className="relative w-1 mx-auto h-full bg-stone-200 mt-4 origin-top">
                  <div
                    ref={(el) => {
                      barsRef.current[index] = el;
                    }}
                    className="absolute top-0 left-0 w-full h-full bg-purple-800 origin-top shadow-[0_0_10px_rgba(107,33,168,0.5)]"
                    style={{ transform: "scaleY(0)" }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-purple-800 font-light">{item.role}</p>
                <h4 className="font-bold text-3xl md:text-4xl">
                  {item.company}
                </h4>
                <p className="text-stone-600 font-light mt-8 md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

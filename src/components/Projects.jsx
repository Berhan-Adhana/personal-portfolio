/* eslint-disable react/prop-types */
import { BiLinkExternal } from "react-icons/bi";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
const Projects = () => {
  return (
    <section className=" section" id="projects">
      <SectionSubtitle subtitle1={"My"} subtitle2={"Jobs"} />
      <SectionTitle title={"Recent Projects"} />

      <div className=" d-container d-grid smd:grid-cols-[360px] md:grid-cols-[352px_352px]  lg:grid-cols-[350px_350px_350px] lg:gap-y-[3rem] lg:px-[2.5rem_4rem]">
        <ProjectCard
          subtitle={"Web"}
          title={"Modren website"}
          image={"/assets/images/project-img-1.png"}
          link={"https://cakezone-sand.vercel.app/"}
        />
        <ProjectCard
          subtitle={"Web"}
          title={"Modren website"}
          image={"/assets/images/project-img-2.png"}
          link={"https://dictionary-web-app-taupe.vercel.app/"}
        />
        <ProjectCard
          subtitle={"Web"}
          title={"Modren website"}
          image={"/assets/images/project-img-3.png"}
          link={"https://myteam-multi-page-website-seven.vercel.app/"}
        />
        <ProjectCard
          subtitle={"Web"}
          title={"Modren website"}
          image={"/assets/images/project-img-4.png"}
          link={
            "https://rest-countries-api-with-color-theme-switcher-reactjs.vercel.app/"
          }
        />
        <ProjectCard
          subtitle={"Web"}
          title={"Modren website"}
          image={"/assets/images/project-img-5.png"}
          link={"https://pizza-house-website.vercel.app/"}
        />
        <ProjectCard
          subtitle={"Web"}
          title={"Modren website"}
          image={"/assets/images/project-img-6.png"}
          link={
            "https://react-responsive-website-git-main-berhan-adhana.vercel.app/"
          }
        />
      </div>
    </section>
  );

  function ProjectCard({ subtitle, title, image, link }) {
    return (
      <article className=" relative rounded-[1rem] overflow-hidden group ">
        <img src={image} alt="projects image" className=" w-full h-full " />

        <div className="group-hover:bottom-0 absolute left-0 -bottom-[100%] w-full h-full rounded-[1rem] flex flex-col justify-center items-center transition-[bottom] duration-500">
          <span className=" text-[var(--title-color)] text-[length:var(--small-font-size)] block mb-[.25rem]">
            {subtitle}
          </span>

          <h2 className=" text-[length:var(--h2-font-size)] mb-[.75rem]">
            {title}
          </h2>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className=" text-[var(--title-color)] text-[length:var(--small-font-size)] flex items-center gap-x-[.5rem] font-[var(---font-medium)] lg:text-[length:var(--normal-font-size)]"
          >
            View demo{" "}
            <BiLinkExternal className="text-[1.25rem] cursor-pointer" />
          </a>
        </div>
      </article>
    );
  }
};

export default Projects;

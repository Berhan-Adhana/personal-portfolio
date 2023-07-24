/* eslint-disable react/prop-types */
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <section className=" section bg-[var(--container-color)]" id="skills">
      <div className=" d-container d-grid pb-[2rem] gap-y-[3.5rem] smd:grid-cols-[360px] sm:justify-center md:grid-cols-2 md:items-center lg:grid-cols-[340px_425px] lg:gap-x-[10rem] lg:pb-[4rem] ">
        <div className="skills__data text-center md:text-left ">
          <SectionSubtitle
            subtitle1={"Favorite"}
            subtitle2={"Skills"}
            style={"text-center md:text-left"}
          />
          <SectionTitle
            title={"My Skills"}
            style={"text-center md:text-left"}
          />

          <p className=" mb-[2rem] lg:mb-[3rem]">
            See fully what skills I have and perform, to develop the projects
            for you.
          </p>

          <a href="#projects" className="button">
            See Projects
          </a>
        </div>

        <div className="skills__content d-grid gap-x-[4rem] justify-center items-baseline grid-cols-[max-content] gap-y-[1rem] lg:gap-x-[8rem] ">
          <ol className=" d-grid list-decimal gap-y-[1rem] lg:gap-y-[1.5rem]">
            <SkillsItem skill={"HTML & CSS"} />
            <SkillsItem skill={"JavaScript"} />
            <SkillsItem skill={"Bootstrap"} />
            <SkillsItem skill={"React"} />
          </ol>

          <ol
            className=" d-grid list-decimal gap-y-[1rem] lg:gap-y-[1.5rem]"
            start="5"
          >
            <SkillsItem skill={"Git & GitHub"} />
            <SkillsItem skill={"Figma"} />
            <SkillsItem skill={"Sketch"} />
          </ol>
        </div>
      </div>
    </section>
  );
};

const SkillsItem = ({ skill }) => (
  <li className="skills__item font-[var(--font-medium)] text-[var(--title-color)] marker:text-[var(--first-color)] lg:text-[1.25rem]">
    {skill}
  </li>
);

export default Skills;

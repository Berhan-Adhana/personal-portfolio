/* eslint-disable react/no-unknown-property */

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDribbble,
} from "react-icons/ai";

export const Hero = () => {
  return (
    <section className=" bg-[var(--container-color)] section" id="home">
      <div className="  d-container pt-[2rem] gap-y-[2.5rem]   grid smd:grid-cols-[360] smd:justify-center lg:grid-cols-[455px_550px] md:grid-cols-2 md:items-center lg:gap-x-[7rem] lg:mx-[3rem]">
        <div className=" gap-y-[2.5rem] lg:gap-y-[4.5rem] grid">
          <div className=" text-center md:text-left ">
            <h3 className=" text-[1.25rem] lg:text-[2rem]">
              Hello, <span className="text-[var(--first-color)]">I’m</span>
            </h3>

            <h1 className=" text-[var(--first-color)] text-[2rem] lg:text-[4rem] font-[var(--font-semi-bold)] whitespace-nowrap">
              Berhan Adhana
            </h1>

            <h3 className=" text-[1.25rem] lg:text-[2rem]">
              Front-end Developer
            </h3>

            <p className="  mt-[1rem] mb-[1.5rem] lg:mx-[1.rem_2.5rem] text-[var(--title-color)]">
              With knowledge in web development and design, I offer the best
              projects resulting in quality work.
            </p>

            <div className="flex gap-x-4 justify-center md:justify-start">
              <a href="#contact" className="button">
                Let&#8217;s Talk
              </a>
              <a
                href="../../public/assets/images/tsiyon resume.pdf"
                className="button"
                download={true}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="home__social flex  gap-x-[1.25rem] lg:gap-y-[1.5rem] justify-center md:justify-start items-start">
            {socialLinks.map((s, index) => {
              return (
                <a
                  key={index}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex bg-[var(--first-color-alt)] p-[.5rem] text-[var(--title-color)] text-[1.5rem] transition-transform duration-500 hover:-translate-y-[.25rem] "
                >
                  {<s.icon />}
                </a>
              );
            })}
          </div>
        </div>

        <Profile />
      </div>
    </section>
  );
};

const socialLinks = [
  {
    url: "https://github.com/",
    icon: AiFillGithub,
  },
  {
    url: "https://dribbble.com/",
    icon: AiOutlineDribbble,
  },
  {
    url: "https://www.linkedin.com/",
    icon: AiFillLinkedin,
  },
];

const Profile = () => (
  <div className=" justify-self-center">
    <svg
      className="home__blob w-[320px] lg:w-[550px] fill-[var(--first-color)] "
      viewBox="0 0 550 591"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="maskBlob" mask-type="alpha">
        <path
          d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                        170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                        447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                        587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                        438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
        />
      </mask>
      <g mask="url(#maskBlob)">
        <path
          d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                        170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                        447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                        587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                        438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
        />

        <rect x="37" width="476" height="630" fill="url(#pattern0)" />
      </g>

      <rect x="37" width="476" height="300" fill="url(#pattern1)" />

      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            href="#imageBlob"
            transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
          />
        </pattern>

        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            href="#imageBlob"
            transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
          />
        </pattern>

        <image
          className="justify-self-center"
          id="imageBlob"
          width="640"
          height="925"
          href="assets/images/berhan.png"
        />
      </defs>
    </svg>
  </div>
);

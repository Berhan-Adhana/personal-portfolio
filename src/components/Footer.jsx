import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" bg-[var(--container-color)] pt-[3.5rem] pb-[2rem]">
      <div className=" d-container grid gap-y-[2rem] text-center lg:grid-cols-3">
        <div>
          <h1 className=" text-[1.5rem] capitalize lg:text-[2rem] mb-[0.25rem]  text-center  font-[var(--font-semi-bold)]">
            Berhan <span className="text-[var(--first-color)]">Adhana</span>
          </h1>

          <h2 className="text-[length:var(--normal-font-size)]">
            Front-end Developer
          </h2>
        </div>

        <div className=" flex justify-center gap-x-[1.25rem]  lg:gap-x-[1.5rem] items-center">
          {FooterSocialLinks.map((s, index) => (
            <a
              key={index}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="footer__social-link flex bg-[var(--first-color-alt)] p-[.5rem] text-[var(--title-color)] text-[1.5rem] hover:-translate-y-[.25rem]"
            >
              {<s.icon />}
            </a>
          ))}
        </div>

        <span className=" lg:justify-self-end lg:m-0">
          &#169;{" "}
          {`Copyright BGA ${new Date().getFullYear()}. All rights reserved`}
        </span>
      </div>
    </footer>
  );
};

const FooterSocialLinks = [
  {
    link: "https://www.facebook.com/",
    icon: AiFillFacebook,
  },
  {
    link: "https://www.instagram.com/",
    icon: AiFillInstagram,
  },
  {
    link: "https://twitter.com/",
    icon: AiFillTwitterCircle,
  },
];

export default Footer;

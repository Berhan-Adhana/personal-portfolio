/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute("id"),
          sectionsClass = document.querySelector(
            ".nav__menu a[href*=" + sectionId + "]"
          );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionsClass.classList.add("active-link");
        } else {
          sectionsClass.classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    return () => window.removeEventListener("scroll", scrollActive);
  });
  return (
    <header
      className="fixed w-full bg-[var(--container-color)] top-0 left-0 z-[var(--z-fixed)]"
      id="header"
    >
      <nav className="h-[var(--header-height)]  flex justify-between  items-center max-w-[1120px] mx-[1.5rem] lg:mx-auto lg:">
        <a
          href="#"
          className="text-[var(--title-color)] text-[length:var(--font-medium)]"
        >
          Berhan <span className="text-[var(--first-color)]">Adhana</span>
        </a>

        <div
          className={` nav__menu bg-[hsla(0,2%,9%,0)] w-[75%] fixed top-0   h-full md:relative ${
            isMenuOpen ? "right-0" : "right-[-100%]"
          } md:right-0 md:flex md:items-center justify-end backdrop-blur-[24px] pr-0 pb-0 pl-[3rem] pt-[4rem] md:p-0  transition-[right] duration-500`}
          id="nav-menu"
        >
          <ul className=" flex flex-col items-center gap-y-6 md:flex-row  sm:gap-y-[3rem] justify-between  gap-x-6">
            {menuLinks.map((m, index) => (
              <NavItem key={index} menuItem={m} />
            ))}
          </ul>

          {/* <!-- Close button --> */}
          <div
            className=" absolute top-[1rem] right-[1.5rem] sm:block md:hidden"
            id="nav-close"
          >
            <AiOutlineClose onClick={() => setMenuOpen(false)} />
          </div>
        </div>

        {/* <!-- Toggle button --> */}
        <div className=" block md:hidden pr-0" id="nav-toggle">
          <FaBars onClick={() => setMenuOpen(true)} size={30} />
        </div>
      </nav>
    </header>
  );

  function NavItem({ menuItem }) {
    return (
      <li className="text-[var(--title-color)] font-[var(--font-medium)] transition-colors duration-500 ">
        <a
          href={menuItem.link}
          className="nav__link active-link hover:text-[var(--first-color)]"
        >
          {menuItem.name}
        </a>
      </li>
    );
  }
};

const menuLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },

  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
export default Header;

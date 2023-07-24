/* eslint-disable react/prop-types */
const SectionTitle = ({ title, style }) => {
  return (
    <h2
      className={`${style} text-[length:var(--h1-font-size)] text-center capitalize lg:text-[2.25rem] mb-[1.5rem]  text-[var(--title-color)] font-[var(--font-semi-bold)]`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;

/* eslint-disable react/prop-types */
const SectionSubtitle = ({ subtitle1, subtitle2, style }) => {
  return (
    <h3
      className={`${style} mb-[.25rem] text-center text-[length:var(--small-font-size)] text-[var(--title-color)] font-[var(--font-semi-bold)] lg:text-[1rem]`}
    >
      {subtitle1}{" "}
      <span className="text-[var(--first-color)] capitalize">{subtitle2}</span>
    </h3>
  );
};

export default SectionSubtitle;

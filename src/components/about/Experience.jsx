import React from "react";

const experienceContent = [
  {
    year: "   09/2022 - Present",
    position: " Web Developer",
    compnayName: "STATUS 200",
    details: `I'm working their on service based criteria as i work on the maintenance of
    their client's sites or adopting new technology in it.
    I also changes the client's sites from different programming language to
    JavaScript Tech Stack.`,
  },
  {
    year: "05/2021 - 08/2022",
    position: "Django developer",
    compnayName: "IT Soft",
    details: `I'm working their on product based criteria as i do maintenance of their
    client's sites or introduce new technology criteria in their sites.`,
  },
  {
    year: "12/2020 - 02/2021",
    position: "Web development Intern",
    compnayName: "Social Tech",
    details: `I'm working their on Client based criteria as i do maintenance of their
    client's sites and learn Web development.`,
  },
  
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;

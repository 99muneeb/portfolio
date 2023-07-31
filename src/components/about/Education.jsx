import React from "react";

const educationContent = [
  {
    year: "2023",
    degree: "BS Software Engineering Degree",
    institute: "GCUF | Government College University Faisalabad",
    details: `3.44 /4 CGPA`,
  },
  {
    year: "2019",
    degree: "ICS computer-science",
    institute: "GOVT Boys Degree College Qaboola",
    details: `851/1100`,
  },
  {
    year: "2017",
    degree: "Matric ",
    institute: "ISLAMIC SCHOOL",
    details: `864/1100`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;

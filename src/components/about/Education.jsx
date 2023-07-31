import React from "react";

const educationContent = [
  {
    year: "2024",
    degree: "BS Software Engineering Degree",
    institute: "The Islamia University Of Bahawalpur",
    details: `3.88 /4 CGPA (6th semester)`,
  },
  {
    year: "2020",
    degree: "FSC Pre-Engineering",
    institute: "GOVT Boys Degree College Block 17",
    details: `951/1100`,
  },
  {
    year: "2018",
    degree: "Matric ",
    institute: "COEGBHSN#1",
    details: `945/1100`,
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

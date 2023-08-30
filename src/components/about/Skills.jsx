import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "HTML" },
  { skillClass: "p90", skillPercent: "90", skillName: "CSS" },
  { skillClass: "p95", skillPercent: "90", skillName: "WORDPRESS" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p90", skillPercent: "85", skillName: "REACT" },
  { skillClass: "p89", skillPercent: "75", skillName: "Next" },
  { skillClass: "p70", skillPercent: "60", skillName: "Python" },
  { skillClass: "p80", skillPercent: "50", skillName: "NODE" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;

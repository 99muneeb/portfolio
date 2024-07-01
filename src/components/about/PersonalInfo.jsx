import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Muneeb", hasColor: "" },
  { meta: "last name", metaInfo: "Rasheed", hasColor: "" },
  { meta: "Age", metaInfo: "24 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Pakistani", hasColor: "" },
  // { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  {
    meta: "Address",
    metaInfo: "Al Nuzha, Riyadh, Saudi Arabia ",
    hasColor: "",
  },
  { meta: "phone", metaInfo: "+966578035338", hasColor: "" },
  {
    meta: "Email",
    metaInfo: "muneeb.software.dev@gmail.com",
    hasColor: "",
  },
  { meta: "Linkedin", metaInfo: "muneeb99", hasColor: "" },
  { meta: "langages", metaInfo: "English & Urdu", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;

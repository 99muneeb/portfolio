import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Muhammmad Safeer", hasColor: "" },
  { meta: "last name", metaInfo: "Hussain", hasColor: "" },
  { meta: "Age", metaInfo: "20 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Pakistani", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Bahawalpur, PB,PK", hasColor: "" },
  { meta: "phone", metaInfo: "+923351805883", hasColor: "" },
  { meta: "Email", metaInfo: "msafeerhussain13@gmail.com", hasColor: "" },
  { meta: "Facebook", metaInfo: "msafeerhussain1214", hasColor: "" },
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

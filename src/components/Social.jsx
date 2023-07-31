import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/",
  },
  { iconName: "fa fa-whatsapp", link: "https://wa.me/+923041630299" },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/muneeb99",
  },
  { iconName: "fa fa-github", link: "https://github.com/99muneeb" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;

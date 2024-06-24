import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>3640 King Faisal Rd Al
        Khalidiyah Dammam 31411, Eastern Province PO Box 30,
        Kingdom of Saudi Arabia
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:muneeb9166@gmail.com">muneeb.software.dev@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Whatsapp me</span>{" "}
        <a href="https://wa.me/+92304-1630299">+92304-1630299</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;

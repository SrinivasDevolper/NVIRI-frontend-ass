import React from "react";
import ".././App.css";
import booking1 from "../images/booking1.png";
import booking2 from "../images/booking2.png";
import booking3 from "../images/booking3.png";

const AllserviceContent = ({ imgUrl, title, desc }) => (
  <div>
    <div className="booking-img-cont">
      <img src={imgUrl} alt="vectorImg1" />
    </div>
    <h1>{title}</h1>
    <p>{desc}</p>
  </div>
);

function Request() {
  return (
    <div className="services-main-container booking-main-container">
      <h1>Book a request in 3 simple steps</h1>
      <div className="service-content-cont booking-content-cont">
        <AllserviceContent
          imgUrl={booking1}
          title="Fridge"
          desc="We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand."
        />
        <AllserviceContent
          imgUrl={booking2}
          title="Fridge"
          desc="We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand."
        />
        <AllserviceContent
          imgUrl={booking3}
          title="Fridge"
          desc="We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand."
        />
      </div>
    </div>
  );
}

export default Request;

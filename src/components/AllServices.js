import React from "react";
import vector from "../images/Vector.png";
import vector3 from "../images/vector3.png";
import vector2 from "../images/Vector2.png";
import vector4 from "../images/vector4.png";
import ".././App.css";

const AllserviceContent = ({ imgUrl, title, desc }) => (
  <div>
    <img src={imgUrl} alt="vectorImg1" />
    <h1>{title}</h1>
    <p>{desc}</p>
  </div>
);

function AllServices() {
  return (
    <div className="services-main-container">
      <div className="services-con">
        <h1>All Services</h1>
        <p>
          The time is now for it to be okay to be great. For being a bright
          color. For standing out.
        </p>
      </div>
      <div className="service-content-cont">
        <AllserviceContent
          imgUrl={vector3}
          title="Fridge"
          desc="We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand."
        />
        <AllserviceContent
          imgUrl={vector}
          title="Air Conditioner"
          desc="Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder."
        />
        <AllserviceContent
          imgUrl={vector2}
          title="Television"
          desc="What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out."
        />
      </div>
      <div className="service-content-cont">
        <AllserviceContent
          imgUrl={vector4}
          title="Gas Stove"
          desc="We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand."
        />
        <AllserviceContent
          imgUrl={vector}
          title="Air Conditioner"
          desc="Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder."
        />
        <AllserviceContent
          imgUrl={vector2}
          title="Television"
          desc="What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out."
        />
      </div>
    </div>
  );
}

export default AllServices;

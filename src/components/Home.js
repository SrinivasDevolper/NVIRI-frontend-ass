import Navbar from "./Navbar";
import useApiFecthing from "./UseApiFecthing.js";
import AllServices from "./AllServices.js";
import Request from "./Request.js";
import "../App.css";
import homeImg from "../images/Group 34.png";
import ZoomIn from "../images/Zoom-In.png";
const Home = () => {
  const [states, errState] = useApiFecthing("instates");
  return (
    <div className="main-container">
      <div className="home-container">
        <Navbar />
        <div className="home-content-container">
          <div className="home-cont">
            <h1 className="home-title">Take care of your home needs now!</h1>
            <p>
              ServicePro is your one-stop solution to troubleshoot, choose a
              vendor and book a technician.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {states.length > 0 ? (
                <select>
                  <option>Select state</option>
                  {states.map((items) => {
                    return <option key={items.id}>{items.state_name}</option>;
                  })}
                </select>
              ) : (
                <p style={{ color: "red" }}>{errState || "*Data Not Found"}</p>
              )}
              <div className="select-div">
                <p>Only in Ameerpet, Gachibowli, & Madhapur</p>
              </div>
            </div>
            <div className="search-container">
              <div className="search-content">
                <div>
                  <img src={ZoomIn} alt="zoom-img" />
                  <input
                    type="search"
                    placeholder="Search Home Appliances"
                    id="searchbar"
                  />
                </div>
              </div>
              <button>Search</button>
            </div>
          </div>
          <div className="home-image-cont">
            <img src={homeImg} alt="main-home-img" />
          </div>
        </div>
        <AllServices />
        <Request />
      </div>
    </div>
  );
};
export default Home;

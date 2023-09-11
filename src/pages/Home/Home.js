import React from "react";
import "./Home.css";
import heroImg from "../../asserts/images/Mask group.png"
const Home = () => {
  return (

    <div className="home" >
      <div className="home_container">
        <div className="home_left">
          <div className="home_left_top">
            <div className="nav_heading">
              The beauty of
              <br />
              every <span>NFT</span>
            </div>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              pariatur quasi obcaecati.
            </p>
            <div className="home_top_button">
              <button className="btn home_btn">Explore</button>
              <button className="btn home_btn">Create</button>
            </div>
          </div>
          <div className="home_left_bottom">
            <div className="home_left_bottom_content">
              <div className="d-flex flex-column gap-2">
                <p className="m-0">Current bid</p>
                <p>
                  <b>5.00 ETH</b>
                </p>
                <p>$11,375.14</p>
              </div>
              <div className="d-flex home_line "></div>
              <div className="d-flex flex-column gap-2">
                <p className="m-0">Current bid</p>
                <p>
                  <b>5.00 ETH</b>
                </p>
                <p>$11,375.14</p>
              </div>
            </div>
            <button className="btn home_btn1">Place bid</button>
            <button className="btn home_btn2">View detail</button>
          </div>
        </div>
        <div className="home_right">
          <div className="home_right_container">
          <img src={heroImg} alt=""></img>
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

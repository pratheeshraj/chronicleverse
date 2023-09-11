import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import cancel from "../asserts/images/x-circle (1) 1.png";
import metamask from "../asserts/images/MetaMask_Fox 1.png";
import "./NavBar.css";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [popup, setpopup] = useState(false);

  return (
    <div className="fluid-container position-relative nav">
      <div
        className="home_popup_backgrount"
        style={{ display: popup ? "flex" : "none" }}
      ></div>
      <div className="home_popup" style={{ display: popup ? "flex" : "none" }}>
        <div className="home_popup_top">
          <div className="home_popup_top_content">
            <h3>Connect your wallet</h3>
            <img src={cancel} alt="" onClick={() => setpopup(false)} />
          </div>
          <p>Connect with Metamask Wallet</p>
        </div>
        <div className="home_popup_bottom">
          <div className="home_popup_bottom_content">
            <img src={metamask} alt="" />
            <h3>Metamask</h3>
          </div>
          <p>
            We do not own your private keys and cannot access your funds without
            your confirmation
          </p>
        </div>
      </div>
      <div className="container d-flex p-3 nav_container align-items-center nav_container">
        <div className="col-6 d-flex align-items-start">
          <div className="text-light">LOGO</div>
          <div className="container-fluid d-flex  nav_item_left">
            <Link to={"#"} className="text-light text-decoration-none ">
              Market place
            </Link>
            <Link to={"/about"} className="text-light text-decoration-none">
              About as
            </Link>
            <Link to={"/contact"} className="text-light text-decoration-none">
              Contact as
            </Link>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-between nav_right">
          <div className=" position-relative ">
            <div className="nav_input_border">
              <input type="text" name="" id="" className="nav_input" />
              <div className="position-absolute fs-5 nav_search_icon">
                <BiSearchAlt2 />
              </div>
            </div>
          </div>
          <div className="nav_notification">
            <div className=" nav_notification_sy"></div>
            <IoMdNotificationsOutline className="fs-3 text-light" />
          </div>
          <Link to={"/create_collectible"} className="nav_btn">
            Create
          </Link>
          <div className="nav_connect_btn " onClick={() => setpopup(!popup)}>
            Connect wallet
          </div>
        </div>
      </div>
      <div className="nav_responsive">
        <div className="nav_responsive_left">
          <h4>LOGO</h4>
          <BiSearch />
        </div>
        <div className="nav_responsive_right">
          <div>hi</div>
          <div>ne</div>
          <div>hi</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

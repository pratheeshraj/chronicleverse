import React from "react";
import { activityNav } from "./data";
import "./Activity.css";
import user from "../../asserts/images/followers_user.png";
import { NavLink, Outlet } from "react-router-dom";
const Activity = () => {
  return (
    <div className="activity">
      <div className="activity_left">
        <h4>Activity</h4>
        <div className="activity_nav">
          {activityNav.map((data, index) => {
            return (
              <NavLink
                to={data.to}
                className={({ isActive }) => (isActive ? "profile_active" : "")}
              >
                {data.heading}
              </NavLink>
            );
          })}
        </div>
        <div className="activity_left_bottom">
          <Outlet />
        </div>
      </div>
      <div className="activity_right">
        <form className="activity_right_box">
          <div className="activity_right_box_top">
            <div className="check_box">
              <input type="checkbox" />
              <p>Bids</p>
            </div>
            <div className="check_box">
              <input type="checkbox" />
              <p>Likes</p>
            </div>
            <div className="check_box">
              <input type="checkbox" />
              <p>Purchase</p>
            </div>
            <div className="check_box">
              <input type="checkbox" />
              <p>Listings</p>
            </div>
            <div className="check_box">
              <input type="checkbox" />
              <p>Transfers</p>
            </div>
            <div className="check_box">
              <input type="checkbox" />
              <p>Followings</p>
            </div>
            <div className="check_box">
              <input type="checkbox" />
              <p>Sales</p>
            </div>
            <div className="check_box">
              <input type="checkbox" />
              <p>Burns</p>
            </div>
          </div>
          <div className="activity_right_box_bottom">
            <div>
              <button>Select all</button>
            </div>
            <div>
              <button>Unselect all</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Activity;

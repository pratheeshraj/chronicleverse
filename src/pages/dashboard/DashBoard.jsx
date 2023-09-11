import React from "react";
import "./DashBoard.css";
import arrow from "../../asserts/images/arrow-left (1) 1.png";
import DashBoardCard from "../../components/dashBoardCard/DashBoardCard";
import { dashboardCard } from "./Data";
const DashBoard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <div className="dashboard_head">
          <img src={arrow} alt="" />
          <div>
            <h3>Dashboard</h3>
            <p>
              The Rise of Digital Collectibles: Exploring the Uncharted Path of
              NFTs
            </p>
          </div>
        </div>
        <div className="dashboard_box">
          <div className="dashboard_box_content">
            <h4>Investment tracking</h4>
            <p>$ 10,000</p>
          </div>
          <div className="dashboard_box_boder">
            <div className="dashboard_inside_box"></div>
          </div>
        </div>
        <div className="recent_transaction">
          <div className="recent_transaction_content">
            <h4>Recent transactions</h4>
            <p>View all</p>
          </div>
          <div className="recent_transaction_box_boder">
            <div className="recent_transaction_inside_box">
              {dashboardCard.map((data, index) => {
              return(
                <DashBoardCard key={index} data={data}/>
              )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

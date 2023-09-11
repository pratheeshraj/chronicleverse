import React from "react";
import "./DashBoardCard.css";
import img from "../../asserts/images/WhatsApp Image 2023-07-27 at 1.19 8.png";
const DashBoardCard = ({ data }) => {
  return (
    <div className="dashboardcard">
      <img src={data.img} alt="" />
      <div className="dashboardcard_content">
        <div className="dashboardcard_name">
          <h4>{data.name}</h4>
          <div>
            {" "}
            <button>{data.type}</button>
          </div>
        </div>
        <div className="dashboardcard_rs">{data.dollar}</div>
        {data.transfer && data.to ? (
          <div className="dashboardcard_name">
            <p>{data.transfer}</p>
            <p>{data.to}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DashBoardCard;

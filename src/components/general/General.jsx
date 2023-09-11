import React, { useState } from "react";
import "./General.css";
import arrow from "../../asserts/images/topArrow.png";
const General = () => {
    const [show1,setshow1]=useState(false)
    const buttton1=()=>{
        setshow1(!show1)
    }
  return (
    <div className="general1">
      <div className="general_div">
        <p>How do i connect my wallet to the platform?</p>
        <img src={arrow} alt="" onClick={buttton1} className="active "/>
      </div>
      <div className="general_hidden_div" style={{ display:show1 ? "flex":"none"}}>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nunc felis sagittis blandit
          urna sit hac eu ultricies ut. In tortor quis ultrices euismod vel
          imperdiet vitae duis lacus. Et aliquam quam massa ultrices quam
          aliquet mauris faucibus nec. Elit posuere augue sit molestie urna
          semper. Maecenas tempus eget aliquam consequat congue rhoncus
          fringilla. Lorem venenatis nec aliquam gravida. Interdum nulla nibh id
          elit adipiscing montes ut sagittis.
        </p>
        <div>
            <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default General;

import React from "react";
import "./FollowersCard.css";
import user from "../../asserts/images/followers_user.png";
const FollowersCards = ({data}) => {
  return (
    <div className="followers_card">
      <div className="followers_card_left">
        <img src={data.img} alt="" />
        <div>
          <h5>{data.name}</h5>
          <p>{data.followers}</p>
        </div>
      </div>
      <div className="followers_card_right">
        <button>unfollow</button>
      </div>
    </div>
  );
};

export default FollowersCards;

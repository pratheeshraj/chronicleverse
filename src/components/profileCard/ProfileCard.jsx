import React from 'react'
import "./ProfileCard.css"
import cardimg from "../../asserts/images/WhatsApp Image 2023-07-27 at 1.19 8.png"
import heart from "../../asserts/images/heart.png"
const ProfileCard = ({data}) => {
    return (
        <div className='ProfileCard'>
            <img src={data.img} alt="" />
            <div className='ProfileCard_name'>
                <p>Metaverse man</p>
                <div>
                    <img src={heart} alt="" />
                    <p>{data.likes}</p>
                </div>
            </div>
            <div className='ProfileCard_bid'>
                <p>Current bid</p>
                <div>
                    {data.price}
                </div>
            </div>
            <div className='ProfileCard_bid_dollor'>
                <p>{data.price_USD}</p>
            </div>
            <button>Place bid</button>
        </div>
    )
}

export default ProfileCard
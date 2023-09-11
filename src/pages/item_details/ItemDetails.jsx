import React, { useState } from 'react'
import "./itemDetails.css"
import profile from "../../asserts/images/profile.png"
import card_img from "../../asserts/images/WhatsApp Image 2023-07-27 at 6.37 6.png"
import { AiOutlineShareAlt, AiOutlineClose, AiTwotoneHeart } from "react-icons/ai"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import price from "../../asserts/images/doller.png"
import transfer from "../../asserts/images/transfer.png"
import close1 from "../../asserts/images/close.png"
import close2 from "../../asserts/images/close2.png"
import report from "../../asserts/images/report.png"
import { navlink } from "./Data.js"
import { NavLink , Outlet} from 'react-router-dom'
import popup_img from "../../asserts/images/popup_arrow.png"

const ItemDetails = () => {
    const [popup,setPopup]=useState(false)
    return (
        <div className='itemdetails'>
            <div className="itemdetails_container">
                <div className='itemdetails_top'>
                    <div className='itemdetails_top_left'>
                        <p className='itemdetails_heading'>Monalisa #88/270</p>
                        <p className='itemdetails_des_heading'>Description</p>
                        <p className='itemdetails_des'>Lorem ipsum dolor sit amet consectetur. Amet adipiscing dignissim suscipit ac senectus nunc ornare. Pretium volutpat sed dignissim congue neque condimentum tellus et. Facilisis in tellus fermentum mi. Luctus a morbi placerat diam sit sed id neque nunc.
                        </p>
                        <div className='itemdetails_card'>
                            <img src={profile} alt="" />
                            <div className='itemdetails_card_left' >
                                <div className='itemdetails_card_left_name'>
                                    Highest bid by RABINDRA
                                </div>
                                <div className='itemdetails_card_left_price'>
                                    <div>1.46ETH</div>
                                    <div className='color'>$2,764.89</div>
                                </div>
                                <div className='itemdetails_card_left_btn'>
                                    <div>
                                        <button>Purchase Now</button>
                                    </div>
                                    <div>
                                        <button>Place bid</button>
                                    </div>
                                </div>
                                <div className='itemdetails_card_left_fee'>
                                    <p>Service Fee</p>
                                    <p className='color'>1.5%</p>
                                    <p>2.563 ETH</p>
                                    <p>$ 4,540.50</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='itemdetails_top_right'>
                        <img src={card_img} alt="" />
                        <div className='social_icon'>
                            <div>
                                <div className='more'>
                                    <AiOutlineClose className='icon' />

                                </div>
                            </div>
                            <div>
                                <div className='more'>
                                    <AiTwotoneHeart className='icon' />
                                </div>
                            </div>
                            <div>

                                <div className='more'>
                                    <AiOutlineShareAlt className='icon' />
                                </div>
                            </div>
                            <div onClick={()=>setPopup(!popup)}>
                                <div className='more' >
                                    <BiDotsHorizontalRounded className='icon last' />
                                </div>
                            </div>
                        </div>
                        
                        <div className='item_detail_popup' style={{display: popup ? "flex":"none"}}>
                        <img src={popup_img} alt='' className='arrow'></img>
                            <div>
                                <img src={price} alt="" />
                                <p>Change price</p>
                            </div>
                            <div>
                                <img src={transfer} alt="" />
                                <p>Transfer token</p>
                            </div>
                            <div>
                                <img src={close1} alt="" />
                                <p>Remove from sale</p>
                            </div>
                             <div>
                                <img src={close2} alt="" />
                                <p>Burn token</p>
                            </div>
                            <div>
                                <img src={report} alt="" />
                                <p>Report</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='itemdetails_link_container'>
                <div className='itemdetails_link'>
                    {navlink.map((data, index) => {
                        return (
                            <NavLink to={data.to} className={({isActive})=>(isActive?"itemdetails_active":"")}>{data.name}</NavLink>
                        )
                    })}
                </div>
            </div>
            <div className='itemdetails_bottom'>
                <Outlet/>
            </div>
        </div>
    )
}

export default ItemDetails
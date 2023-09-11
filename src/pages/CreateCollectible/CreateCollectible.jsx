import React from 'react'
import "./craeteCollectible.css"
import arrow from "../../asserts/images/arrow-left (1) 1.png"
import image1 from "../../asserts/images/Group 295.png"
import image2 from "../../asserts/images/WhatsApp Image 2023-07-27 at 6.37 6.png"
import { Link } from 'react-router-dom'
const CreateCollectible = () => {
    return (
        <div className='create_collectible'>
            <div className='create_collectible_container'>
                <div className='create_collectible_top'>
                    <img src={arrow} alt="" />
                    <h3>Create collectible</h3>
                    <p>Choose “Single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one
                        <br />collectible multiple times</p>
                </div>
                <div className='create_collectible_bottom'>
                    <div className='create_collectible_card'>
                        <div>
                        <div className='create_collectible_left_box'>
                            <img src={image2} alt="" />
                           <div>
                           <Link to={"/single_collectible"}>Single Collectible</Link>
                           </div>
                        </div>
                        </div>
                       <div>
                       <div className='create_collectible_right_box'>
                            <img src={image1} alt="" />
                            <div>
                            <Link>multi Collectible</Link>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className='create_collectible_footer'>We do not own your private keys and cannot access your funds without your confirmation.</div>
                </div>
            </div>
        </div>
    )
}

export default CreateCollectible

import React, { useRef, useState } from 'react'
import "./SingleCollectible.css"
import arrow from "../../asserts/images/arrow-left (1) 1.png"
import upload from "../../asserts/images/upload (1) 1.png"
import image2 from "../../asserts/images/WhatsApp Image 2023-07-27 at 6.37 6.png"
import cancel from "../../asserts//images/x-circle (1) 1.png"
import create from "../../asserts//images/Frame 1096.png"
import { AiOutlineArrowRight } from "react-icons/ai"
import SingleCollectiblePopup from '../single_collectible_popup/SingleCollectiblePopup'
const SingleCollectible = () => {
    const [popup, setpopup] = useState(false);
    const inputImage = useRef(null)
    const handleClick = () => {
        inputImage.current.click()
    }
    return (
        <div className='singlecollectible'>
            <div
                className="home_popup_backgrount"
                style={{ display: popup ? "flex" : "none" }}
            ></div>
            <div className='singlecollectible_popup' style={{ display: popup ? "flex" : "none" }}>
                <SingleCollectiblePopup />
            </div>
            <div className='singlecollectible_container'>
                <div className='singlecollectible_heading'>
                    <img src={arrow} alt="" />
                    <h3>Create single collectible</h3>
                </div>
                <div className='singlecollectible_contant_container'>
                    <form className='singlecollectible_left'>
                        <div className='singlecollectible_Upload'>
                            <h4>Upload</h4>
                            <div>
                                <a href="#">Switch to multible</a>
                            </div>
                        </div>
                        <p>Drag or choose your file to upload</p>
                        <div className="singlecollectible_image_upload" onClick={handleClick}>
                            <input type="file" id='file' ref={inputImage} />
                            <div className='image_upload'>
                                <img src={upload} alt="" />
                                <p>PNG,GIF,WEBP,MP4 or MP3. Max 500MP</p></div>
                        </div>
                        <h3>Item details</h3>
                        <div className='singlecollectible_groupinput'>
                            <div className='singlecollectible_input'>
                                <p>Name</p>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='singlecollectible_input borders' >
                                <p>Description <span>(optional)</span></p>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className='singlecollectible_toggle_btns1'>
                            <div className='singlecollectible_toggle_btn1'>
                                <p>Put on sale</p>
                                <label className='toggle_btn1'>
                                    <input type="checkbox" />
                                    <span className='toggle_btn1_slider'></span>
                                </label>
                            </div>
                            <p>You will receive bids on this item</p>
                        </div>
                        <div className='singlecollectible_toggle_btns1'>
                            <div className='singlecollectible_toggle_btn1'>
                                <p>Instant sale price</p>
                                <label className='toggle_btn1'>
                                    <input type="checkbox" />
                                    <span className='toggle_btn1_slider btn2'></span>
                                </label>
                            </div>
                            <p>Enter the price for which the item will be instantly sold</p>
                        </div>
                        <div className="singlecollectible_price_input">
                            <h3>Enter price for one piece</h3>
                            <div>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        <div className='singlecollectible_fee'>
                            <p>service fee </p>
                            <h6>2.5%</h6>
                        </div>
                        <div className='singlecollectible_fee margin'>
                            <p>you will rreceive</p>
                            <h6>0 ETH</h6>
                            <p>$0.00</p>
                        </div>
                        <div className='singlecollectible_toggle_btns1 margin_top'>
                            <div className='singlecollectible_toggle_btn1'>
                                <p>Unlock once purchased</p>
                                <label className='toggle_btn1'>
                                    <input type="checkbox" />
                                    <span className='toggle_btn1_slider'></span>
                                </label>
                            </div>
                            <p>Contant will be unlocked after successful transection</p>
                        </div>
                        <div className="singlecollectible_price_input margin_bottom">
                            <h3>Digital  key, code to redeem or link to file....</h3>
                            <div>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="singlecollectible_choose_col">
                            <h4>Choose collection</h4>
                            <p>Choose an exiting collection or a create new one</p>
                            <div className='singlecollectible_choose_col_card'>
                                <div>
                                    <div className='card1'>
                                        <img src={create} alt="" />
                                        <p>Create</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='card1'>
                                        <img src={create} alt="" />
                                        <p>NFT</p>
                                    </div>
                                </div>
                            </div>
                            <div className='singlecollectible_create_item'>
                                <button type="submit">Submit <AiOutlineArrowRight /></button>
                                <p>Auto save</p>
                            </div>
                        </div>
                    </form>
                    <div className='singlecollectible_right'>
                        <div className='singlecollectible_right_container'>
                            <h2>Preview</h2>
                            <p>Details you have entered</p>
                            <div className='singlecollectible_right_card'>
                                <img src={image2} alt="" />
                                <div className='singlecollectible_right_card_detail'>
                                    <h4>Jesus love</h4>
                                    <p>4.83ETH</p>
                                </div>
                                <div className='singlecollectible_right_card_bottom'>
                                    <p>Clear all</p>
                                    <img src={cancel} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCollectible

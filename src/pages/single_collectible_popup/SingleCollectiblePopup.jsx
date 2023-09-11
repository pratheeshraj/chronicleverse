import React from 'react'
import "./SingleCollectiblePopup.css"
import cancel from "../../asserts/images/x-circle (1) 1.png"
import upload from "../../asserts/images/Line.png"
import pencil from "../../asserts/images/pencil.png"
import bag from "../../asserts/images/bag.png"
const SingleCollectiblePopup = () => {
    return (
        <div className='SingleCollectiblePopup'>
            <div className='SingleCollectiblePopup_heading'>
                <h3>Follow steps</h3>
                <img src={cancel} alt="" />
            </div>
            <div className='SingleCollectiblePopupStep'>
                <div className='SingleCollectiblePopup_upload'>
                    <div className='SingleCollectiblePopup_upload1'>
                        <div className='div1'>
                            <div className='circle'></div>
                            <img src={upload} alt="" />
                        </div>
                        <div className='content'>
                            <h4>Upload files @ Mint token</h4>
                            <p>Upload files @ Mint token</p>
                        </div>
                    </div>
                    <button className='done'>
                        Done
                    </button>
                </div>
                <div className='SingleCollectiblePopup_upload'>
                    <div className='SingleCollectiblePopup_upload1'>
                        <div className='div1'>
                            <div className='circle'></div>
                            <img src={pencil} alt="" />
                        </div>
                        <div className='content'>
                            <h4>Sign sell order</h4>
                            <p>Sign sell order using your wallet</p>
                        </div>
                    </div>
                    <button>
                        Start now
                    </button>
                </div>
                <div className='SingleCollectiblePopup_upload'>
                    <div className='SingleCollectiblePopup_upload1'>
                        <div className='div1'>
                            <div className='circle'></div>
                            <img src={bag} alt="" />
                        </div>
                        <div className='content'>
                            <h4>Sign Lock order</h4>
                            <p>Sign lock order using your wallet</p>
                        </div>
                    </div>
                    <button>
                        Start now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleCollectiblePopup

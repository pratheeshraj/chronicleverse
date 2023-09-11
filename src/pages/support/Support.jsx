import React, { useState } from "react";
import "./Support.css";
import {BsFillPersonFill} from "react-icons/bs"
import {BiSolidMessage} from "react-icons/bi"
import {FaProductHunt} from "react-icons/fa"
import{IoMdCloudUpload} from "react-icons/io"
import General from "../../components/general/General";
const Support = () => {
  const [general,setGeneral]=useState(true)
  const [support,setSupport]=useState(false)
  const [hosting,setHosting]=useState(false)
  const [product,setProduct]=useState(false)

  const generaldiv=()=>{
    setGeneral(true)
    setSupport(false)
    setHosting(false)
    setProduct(false)
  }
  const hostingdiv=()=>{
    setSupport(false)
    setGeneral(false)
    setHosting(true)
    setProduct(false)
  }
  const productdiv=()=>{
    setSupport(false)
    setGeneral(false)
    setHosting(false)
    setProduct(true)
  }
  const supportdiv=()=>{
    setSupport(true)
    setGeneral(false)
    setHosting(false)
    setProduct(false)
  }

  return (
    <div className="support">
      <div className="support_top">
        <p>Learn how to get started</p>
        <h4>Frequently asked questions</h4>
        <div>
          Join stacks community now to get free updates and also alot of
          freebies are waiting <br />for you or CONTACT SUPPORT
        </div>
      </div>
      <div className="support_bottom">
        <div className="support_bottom_left">
            <div className="support_bottom_left_content">
              <div className="icon" onClick={generaldiv}>
                <BsFillPersonFill className={general ?"icon_color":""}/>
                <p  className={general ?"icon_active":""}>General</p>
              </div>
              <div className="icon" onClick={supportdiv}>
                <BiSolidMessage className={support ?"icon_color":""}/>
                <p  className={support ?"icon_active":""}>Support</p>
              </div>
              <div className="icon" onClick={hostingdiv}>
                <IoMdCloudUpload className={hosting ?"icon_color":""}/>
                <p className={hosting ?"icon_active":""}>Hosting</p>
              </div>
              <div className="icon" onClick={productdiv}>
                <FaProductHunt className={product ?"icon_color":""}/>
                <p className={product ?"icon_active":""}>Product</p>
              </div>
            </div>
        </div>
        <div className="support_bottom_right">
         <div className="general" style={{display:general?"flex":"none"}}><General/></div>
         <div className="Support" style={{display:support?"flex":"none"}}>Support</div>
         <div className="Hosting" style={{display:hosting?"flex":"none"}}>Hosting</div>
         <div className="Product" style={{display:product?"flex":"none"}}>Product</div>
        </div>
      </div>
    </div>
  );
};

export default Support;

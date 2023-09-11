import React from 'react'
import "./Profile.css"
import profilebanner from '../../asserts/images/profileBanner.png'
import profile_pic from "../../asserts/images/propile_pic.png"
import { Link, NavLink, Outlet } from 'react-router-dom'
import copy from "../../asserts/images/copy (2) 1.png"
import share from "../../asserts/images/share-2 1.png"
import dots from "../../asserts/images/dots.png"
import { Headings } from './Data'
const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile_section'>
                <div className='profilebanner_bg'>
                    <div></div>
                    <img src={profilebanner} alt="" />
                </div>
                <div className='profile_pic'>
                    <img src={profile_pic} alt="" />
                    <div className='profile_pic_link'>
                        <Link>
                            Edit profile
                        </Link>
                        <Link>
                            Edit cover
                        </Link>
                    </div>
                </div>
                <div className='profile_container'>
                    <h3>RABINDRA</h3>
                    <div className='profile_link'>
                        <div className='profile_link_left'>
                            <div className='profile_link_content'>
                                <div>0GFHRYTIU77XJXZNXCJHSJH......TEY647UHFG</div>
                                <img src={copy} alt="" />
                            </div>
                        </div>
                        <div className='profile_link_right'>
                            <button className='follow_btn'>
                                Follow
                            </button>
                            <div className='profile_share'>
                                <button>
                                    <img src={share} alt="" />
                                </button>
                            </div>
                            <div className='profile_more'>
                                <button>
                                    <img src={dots} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='profile_dec'>
                        Lorem ipsum dolor sit amet consectetur. Donec ac natoque ac non velit. Sed egestas consequat volutpat ac rutrum duis. Euismod
                        massa donec dignissim vitae mauris etiam tellus.
                    </div>
                    <div className='profile_nav'>
                        {
                            Headings.map((data, index) => {
                                return (
                                    <NavLink to={data.to} className={({isActive})=>(isActive?"profile_active":"")}>{data.heading}</NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='profile_nav_router'>
                <Outlet />
            </div>
        </div>
    )
}

export default Profile

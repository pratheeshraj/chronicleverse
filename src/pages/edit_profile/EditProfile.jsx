import React from 'react'
import "./EditProfile.css"
import arrow from "../../asserts/images/arrow-left (1) 1.png"
import profile_ from "../../asserts/images/profile.png"
import { AiOutlinePlus } from "react-icons/ai"
import { IoMdCloseCircleOutline } from "react-icons//io"
const EditProfile = () => {
    return (
        <div className='editprofile'>
            <div className='editprofile_container'>
                <div className="editprofile_heading">
                    <img src={arrow} alt="" />
                    <h4>
                        Edit profile
                    </h4>
                    <p>You can set preferred display name, create your profile URL  and manage other personal setting</p>
                </div>
                <form className='editprofile_section'>
                    <div className='editprofile_section_left'>
                        <img src={profile_} alt="" />
                        <div>
                            <p className='editprofile_section_left_heading'>Profile photo</p>
                            <p>We recommend an image
                                of at least 400x400.
                                Gifts work too </p>
                            <div>
                                <label for="pic_edit">Upload</label>
                            </div>
                            <input type="file" id='pic_edit' />
                        </div>
                    </div>
                    <div className='editprofile_section_right'>
                        <div className='editprofile_section_right_acc_ifo'>
                            <p>Account info</p>
                            <div className='editprofile_section_right_input'>
                                <p>
                                    Display name
                                </p>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='editprofile_section_right_input'>
                                <p>
                                    Custom URL
                                </p>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='editprofile_section_right_input_area'>
                                <p>
                                    Bio
                                </p>
                                <div>
                                    <textarea type="text" />
                                </div>
                            </div>
                            <p>Social</p>
                            <div className='editprofile_section_right_input'>
                                <p>
                                    Portfolio or website
                                </p>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='editprofile_section_right_input'>
                                <p>
                                    Twitter
                                </p>
                                <div>
                                    <button type="button">Verify account</button>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='add_more'>
                                <button>{<AiOutlinePlus />}Add more social account</button>
                            </div>
                            <div className='editprofile_section_right_input_submit'>
                                <div>
                                    <p>Clear all<IoMdCloseCircleOutline /></p>
                                    <input type="submit" value="Update profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile
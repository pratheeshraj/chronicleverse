import React from 'react'
import "./CreateCollection.css"
import arrow from "../../asserts/images/arrow-left (1) 1.png"
import banner_img from "../../asserts/images/WhatsApp Image 2023-07-27 at 6.43 4.png"
import profile_img from "../../asserts/images/WhatsApp Image 2023-07-27 at 1.19 8.png"
import { Link } from 'react-router-dom'
const CreateCollection = () => {
    return (
        <div className='create_collection'>
            <div className='create_collection_container'>
                <div className='create_collection_heading'>
                    <img src={arrow} alt="" />
                    <p>Create collection page</p>
                </div>
                <form className='create_collection_form_container'>
                    <div className="create_collection_image">
                        <img src={banner_img} alt="" className='create_collection_bannerimg' />
                        <div className='create_collection_editbtn'>
                            <Link to={"#"} >Edit profile</Link>
                            <Link to={"#"}>Edit cover</Link>
                        </div>
                        <img src={profile_img} alt="" className='create_collection_profileimg' />
                    </div>
                    <div className='create_collection_input_group'>
                        <p>Collection title</p>
                        <div className='create_collection_input'>
                            <input type="text" />
                        </div>
                        <p>Collection url</p>
                        <div className='create_collection_input'>
                            <input type="text" />
                        </div>
                        <p>Collection description</p>
                        <div className='create_collection_input_textarea'>
                            <textarea type="text" />
                        </div>
                        <input type="submit" value="Create collection" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateCollection

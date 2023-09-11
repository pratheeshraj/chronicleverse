import React from 'react'
import "./Followers.css"
import FollowersCards from '../../../components/followers_card/FollowersCards'
import {Follower} from '../Data'
const Followers = () => {
  return (
    <div className='followers'>
      {
        Follower.map((data,index)=>{
          return(
            <FollowersCards key={index} data={data} />
          )
        })
      }
    </div>
  )
}

export default Followers

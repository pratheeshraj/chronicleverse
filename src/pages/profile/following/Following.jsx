import React from 'react'
import { Follower } from '../Data'
import FollowersCards from '../../../components/followers_card/FollowersCards'
import "./Following.css"
const Following = () => {
  return (
    <div className='following'>
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

export default Following
import React from 'react'
import "./Onsale.css"
import ProfileCard from '../../../components/profileCard/ProfileCard'
import { Data } from '../Data'

const OnSale = () => {
  return (
    <div className='OnSale'>
     {
      Data.map((data,index)=>{
        return(
          <ProfileCard data={data}/>
        )
      })
     }
    </div>
  )
}

export default OnSale

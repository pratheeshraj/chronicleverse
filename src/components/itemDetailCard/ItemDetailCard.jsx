import React from 'react'
import "./itemDetailCard.css"
const ItemDetailCard = ({ data }) => {
    return (
        <div className='itemDetailCard'>
            <img src={data.img} alt="" />
            <div className='Info_content'>
                <p>{data.name}</p>
                <h4>{data.value}</h4>
            </div>
        </div>
    )
}

export default ItemDetailCard
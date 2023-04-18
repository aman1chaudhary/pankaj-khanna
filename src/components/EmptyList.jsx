import React from 'react'
import EmptyImg from "../assets/images/empty.gif"

const EmptyList = () => {
    return (
        <div>
            <div className='emptyList-wrap'>
                <img src={EmptyImg} alt='empty' /><br/>
                
            </div>
            <h2 style={{textAlign: "center", color:"red", margin:"auto"}}>Not Found!</h2>
        </div>
    )
}

export default EmptyList

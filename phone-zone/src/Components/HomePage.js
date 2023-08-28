import React from "react";
import{ useEffect, useState } from "react";

function Homepage(){
    const [getPhones , setPhones] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8001/phone_models")
        .then((response) => response.json())
        .then((data) => setPhones(data))
    },[])
    return(
        <div className="home">
            {getPhones.map((phone) =>(
                <div  className='phones' key={phone.id}>
                    <img src={phone.img} alt ={phone.name}/>
                    <h3>Brand: {phone.brand}</h3>
                    <h4>Name: {phone.name}</h4>
                    <p>Price: {phone.price}USD</p>
                    <button>View Details</button>
                </div>
            ))}
        
        </div>
    )
}
export default Homepage;
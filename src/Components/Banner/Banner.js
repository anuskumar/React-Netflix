import React from 'react'
import './Banner.css'
import axios from '../Axios'
import {useEffect,useState} from 'react'
import {Api_Key,Base_Url,ImageUrl} from '../constants'

function Banner() {
    const [banner, setBanner] = useState([])
 
    useEffect(() => {

        axios.get(`trending/all/day?api_key=${Api_Key}`).then((response)=>{
            console.log(response.data.results[0])
            setBanner(response.data.results[0])

        })
        
    }, [])

    return (
        <div className="Banner" style={{backgroundImage:`url(${banner ? ImageUrl+banner.backdrop_path :""})`}}>

           
            <div className="emailenter">
            <h1 className="main_heading">{banner ? banner.original_title : ""}</h1>
            <h2 className="main_heading">{banner ? banner.overview : ""}</h2>
            <br></br>
            {/* <div className="textarea">
                <input type="text" className="email_enter" placeholder="Enter the Film Name" ></input>
                <button className="search_btn">Search</button>
            </div> */}
            </div>
        </div>
    )
}

export default Banner

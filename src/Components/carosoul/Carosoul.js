import React from 'react'
import './Carosoul.css'
import axios from '../Axios'
import {useEffect,useState} from 'react'
import {Api_Key,Base_Url,ImageUrl} from '../constants'

function Carosoul() {

    const [cur, setCur] = useState([])

    useEffect(() => {

        axios.get(`trending/all/day?api_key=${Api_Key}`).then((response)=>{
            console.log(response.data.results)
            setCur(response.data.results)
        })
        
       
    }, [])
    return (
    <div className="row">
        <div className="carosoul">
            {cur.map((obj)=>

            <div className="container">
            <h2>{obj.title}</h2>
           <img className="item" src={`${ImageUrl+obj.backdrop_path}`}>
              
           </img> 
           </div> 
            )}
         


        
        



        </div>






        
        {/* <a  class_Name="item"><img src="https://placeimg.com/640/480/animals" alt="Animals"> </img></a>
        <a  class_Name="item"><img src="https://placeimg.com/640/480/architecture" alt="Architecture"> </img></a>
        <a  class_Name="item"><img src="https://placeimg.com/640/480/nature" alt="Nature"> </img></a>
        <a  class_Name="item"><img src="https://placeimg.com/640/480/people" alt="People"> </img></a>
        <a  class_Name="item"><img src="https://placeimg.com/640/480/tech" alt="Tech"></img> </a> */}
           








        </div>

        



    )
}

export default Carosoul

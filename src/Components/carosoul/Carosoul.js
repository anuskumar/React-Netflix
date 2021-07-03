import React from 'react'
import './Carosoul.css'
import axios from '../Axios'
import {useEffect,useState} from 'react'
import {Api_Key,Base_Url,ImageUrl} from '../constants'
import {Banner,setBanner} from '../Banner/Banner'
import YouTube from 'react-youtube'


function Carosoul(props) {

    const [cur, setCur] = useState([])

    useEffect(() => {

        axios.get(`discover/movie?api_key=${Api_Key}&with_genres=${props.id}`).then((response)=>{
            // console.log(response.data.results)
            setCur(response.data.results)
        })
        
       
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
        //   https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

      const [videokey, setVideokey] = useState('')

      const movie_video=(id)=>{

        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${Api_Key}&language=en-US`).then((response)=>{

            // console.log(response.data.results[0].key)
            if(response.data.results[0].length!==0){
            setVideokey(response.data.results[0])}else{
                console.log("empty")
            }
            console.log(videokey)


        })


          
      }
      
    return (
    <div className="row" style={{backgroundColor:'black'}}>
        <h1 style={{color:'white',float:'left'}}>{props.name}</h1>
        <div className="carosoul">
            {cur.map((obj,index)=>

           
            
            <div style={{display:'inline-flex'}}>
            
           <div onClick={()=>movie_video(obj.id)}  style={{width:300,backgroundImage:`url(${ImageUrl+obj.backdrop_path})`,backgroundPosition:"center",backgroundSize:"cover"}} >
           <h2 style={{color:"white"}}>{obj.title}</h2>
           </div>
              
            
           </div> 
            )
            
            }
         


        
       



        </div>






        
        {/* <a  class_Name="item"><img src="https://placeimg.com/640/480/animals" alt="Animals"> </img></a>
        <a  class_Name="item"><img src="https://placeimg.com/640/480/architecture" alt="Architecture"> </img></a>
        <a  class_Name="item"><img src="https://placeimg.com/640/480/nature" alt="Nature"> </img></a>
        <a  class_Name="item"><img src="https://placeimg.com/640/480/people" alt="People"> </img></a>
        <a  class_Name="item"><img src="https://placeimg.com/640/480/tech" alt="Tech"></img> </a> */}
           





           { videokey &&  <YouTube videoId={videokey.key} opts={opts} />}


        </div>

        



    )
}

export default Carosoul

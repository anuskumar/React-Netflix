
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Carosoul from './Components/carosoul/Carosoul';
import axios from '../src/Components/Axios';
import {useState,useEffect} from 'react';
import react from 'react';
import { Api_Key } from './Components/constants';



function App() {

  const [geners, setGeners] = useState([])

useEffect(() => {
axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_Key}&language=en-US`).then((Response)=>{
  setGeners(Response.data.genres);
  // console.log(Response.data.genres);
})

}, [])


  return (
   <div className="App">
     <Navbar/>
     <Banner/>
     
     {geners.map((gen)=>

    <Carosoul name={gen.name} id={gen.id} />
   

     )}
     
     

   </div>
  );
}

export default App;

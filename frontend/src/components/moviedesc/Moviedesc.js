import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./moviedesc.css";
export default function Moviedesc(){
const location = useLocation();
const nav = useNavigate();
const [data , setData] = useState(location.state);
return(<>
<div className="maindiv">
  <img src={data.image}/>
  <div>
    <h2>{data.title}</h2>
  <p><span dangerouslySetInnerHTML={{ __html: data.detail }} ></span></p>
  <a href={data.page}>More</a>
  <button onClick={()=>{nav(`/ticket/${data.title}`,{state:{rating:data.rating,title:data.title , price:Math.random(),runtime:data.runtime,releaseDate:data.releaseDate}})}}>Book Ticket</button>
 </div>
</div>
</>);
};
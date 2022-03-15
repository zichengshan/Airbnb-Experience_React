import React from "react";
// import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"

// Reusable component
export default function Card(props){
    const image = props.img;
    return(
        <div className="card">
            <img className="card--image"  src ={require(`../images/${props.img}`)} alt = "katie"/>
            <div className="card--stats">
                <img className="card--star" src = {star} alt = "star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reveiveCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
import React from "react";

// Reusable component
export default function Card(props){
    return(
        <div className="card">
            <img className="card--image" src = {`/images/${props.img}`}  alt = "katie"/>
            <div className="card--stats">
                <img className="card--star" src="/images/star.png" alt = "star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reveiveCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
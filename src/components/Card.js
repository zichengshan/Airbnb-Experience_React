import React from "react";

// Reusable component
export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src = {`/images/${props.item.coverImg}`}  alt = "katie"/>
            <div className="card--stats">
                <img className="card--star" src="/images/star.png" alt = "star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reveiveCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
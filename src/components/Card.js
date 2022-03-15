import React from "react";
import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"

export default function Card(){
    return(
        <div className="card">
            <img className="card--image"  src = {katie} alt = "katie"/>
            <div className="card--stats">
                <img className="card--star" src = {star} alt = "star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}
import React from "react";
import group_pic from "../images/group_pic.png"

export default function Hero(){
    return (
        <section className="hero">
            <img className="Hero--photo" src = {group_pic} alt = "group_pic" />
            <h1 className="Hero--header">Online Experience</h1>
            <p className="Hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}
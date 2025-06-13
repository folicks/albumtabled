import React from "react";
import "../styles/Event.css";

const Event = ({ event, artist, year, cover, color = "blue" }) => {
    return (
        <div className={`album-card hover-${color}`}>
            <img src={cover} alt={`${event} album cover`} className="album-cover" />
            <div className="album-info">
                <h3>{event}</h3>
                <p className="artist">{artist}</p>
                <p className="year">{year}</p>
            </div>
        </div>
    );
}

export default Event;
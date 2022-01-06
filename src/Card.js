import React from "react"

export default function Card(props) {
    return (
        <div className="card-container">
            <section className="image">
                <div className="img">
                    <img src={props.imageUrl} />
                </div>
            </section>
            <section className="about">
                <div className="location">
                    <p><i className="fas fa-map-marker-alt"></i>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="info">
                    <h1>{props.title}</h1>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </section>
        </div>
    )
}
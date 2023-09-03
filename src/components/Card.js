import React from "react";

export default function Card({
  title,
  googleMapsUrl,
  location,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <div className="card">
      <div>
        <img className="cards-image" src={imageUrl} alt="Mount Fuji" />
      </div>
      <div className="cards-info">
        <div className="url-line">
          <img
            className="marker-image"
            src={require("../images/location.png")}
            alt="location icon"
          />
          <span className="country-name">{location}</span>
          <a className="map-link" href={googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <p className="location-name">{title}</p>
        <p className="location-time">
          {startDate} - {endDate}
        </p>
        <p className="location-description">{description}</p>
      </div>
    </div>
  );
}

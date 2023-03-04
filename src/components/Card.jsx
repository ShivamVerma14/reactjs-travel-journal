import locationIcon from "../images/location.png";

function Card(props) {
    const {
        title,
        location,
        googleMapLink,
        startDate,
        endDate,
        description,
        imageURL,
    } = props;

    return (
        <div className="card-container">
            <img src={imageURL} alt={title} className="card-image" />

            <div className="card-details">
                <div className="card-location">
                    <img
                        src={locationIcon}
                        alt="location icon"
                        className="card-location-icon"
                    />
                    <p className="card-location-text">{location}</p>
                    <a href={googleMapLink} className="card-location-link">
                        View on Google Maps
                    </a>
                </div>

                <h1 className="card-title">{title}</h1>
                <p className="card-dates">
                    {startDate} - {endDate}
                </p>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}

export default Card;

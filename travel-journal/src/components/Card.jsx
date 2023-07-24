import locationSymbol from '../assets/locationicon.png'

function Card(props) {
    return(
        <div className="card-container">
            <img src={props.name.image} alt='card-image' className="card-image"></img>
            
            
            <h3 className="title">{props.name.name}</h3>
            <div className='location-and-icon'>
            <img src={locationSymbol} alt='location' className="location-icon"></img>
            <p className="location">{props.name.location}</p>
            </div>
            
            <div className="start-end-date">
                <p className="start-date">{props.name.startDate}</p>
                <p className="end-date">{props.name.endDate}</p>
            </div>
            <p className="description">{props.name.description}</p>
        </div>
    )
}

export default Card
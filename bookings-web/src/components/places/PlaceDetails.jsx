import React, {useEffect, useState} from 'react';
import { getOnePlace } from '../../services/placesApi'
function PlaceDetails({ match }) {
   const [place, setPlace] = useState({})
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      getOnePlace(match.params.id)
         .then(setPlace)
         .finally(() => setLoading(false))
   }, []);

   console.log(place)
   const {name, description, location, image, pool, wifi, pricePerNight, ImageThubnail, maxGuests, petFriendly} = place
   return loading ? (
      <h1>Loading...</h1>
   ) : (
         <div>
            <p>{name}</p>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>{location}</p>
            <p>Pool: {pool}</p>
            <p>Wifi: {wifi}</p>
            <p>${pricePerNight} per night</p>
            <p>{maxGuests} person guest limit</p>
            <p>Pet friendly: {petFriendly}</p>
         </div>
   )
}

export default PlaceDetails;
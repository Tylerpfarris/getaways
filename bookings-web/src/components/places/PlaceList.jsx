import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';
import {Container} from '@material-ui/core'
const PlaceList = ({ places, page }) => {
const pagedPlaceList =  places.slice(((page - 1) * 24), (page * 24))

  return (
    <Container
      maxWidth='xl'
      style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      {pagedPlaceList.map((place) => {
        return(
        <Place key={place.id} {...place} />
        );}
    )} 
    </Container>
  )
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      pricePerNight: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      imageThumbnail: PropTypes.string.isRequired,
      maxGuests: PropTypes.number.isRequired,
      petFriendly: PropTypes.bool.isRequired,
      pool: PropTypes.bool.isRequired,
      wifi: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PlaceList;

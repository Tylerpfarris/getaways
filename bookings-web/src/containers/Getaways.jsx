import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import { Button, Container, Typography } from '@material-ui/core';

const Getaways = () => {
  const [loading, setLoading] = useState(true)
  const [places, setPlaces] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPlaces()
      .then(setPlaces)
      .finally(setLoading(false));
  }, [page]);

  const handlePageIncrement = () => {
    setPage(prevPage => prevPage + 1)
  }
  const handlePageDecrement = () => {
    setPage(prevPage => prevPage - 1)
  }
  if (loading) return<h1>Loading...</h1>;
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container
          style={{
            displace: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {page > 1 && (
            <Button
              onClick={handlePageDecrement}
              variant="contained"
              size="small"
              color="primary"
              style={{
                display: 'inline',
                marginRight: '10px',
                marginTop: '5px',
              }}
            >
              Previous
            </Button>
          )}
          {page === 1 && (
            <Button
              onClick={handlePageDecrement}
              variant="disabled"
              size="small"
              color="primary"
              style={{
                display: 'inline',
                marginRight: '10px',
                marginTop: '5px',
              }}
            >
              Previous
            </Button>
          )}
          <Typography variant="body2" style={{ display: 'inline' }}>
            {page} / {Math.ceil(places.length / 24)}
          </Typography>
          {page < Math.ceil(places.length / 24) && (
            <Button
              onClick={handlePageIncrement}
              variant="contained"
              size="small"
              color="primary"
              style={{
                display: 'inline',
                marginLeft: '10px',
                marginTop: '5px',
              }}
            >
              Next
            </Button>
          )}
          {page === Math.ceil(places.length / 24) && (
            <Button
              onClick={handlePageIncrement}
              variant="disabled"
              size="small"
              color="primary"
              style={{
                display: 'inline',
                marginLeft: '10px',
                marginTop: '5px',
              }}
            >
              Next
            </Button>
          )}
        </Container>
      </div>
      <PlaceList places={places} page={page} />
    </>
  );  
};

export default Getaways;

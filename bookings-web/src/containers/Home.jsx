import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Typography } from '@material-ui/core';

const Home = ({ history }) => {
   return (
     <Container
       style={{
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
       }}
     >
         <Typography
            variant={'h1'}
            style={{
            textAlign: 'center'
         }}>Getcho Self a Vacay</Typography>
       <Button
         variant="contained"
         color="secondary"
         onClick={() => history.push('/places')}
       >
         See some options
       </Button>
     </Container>
   );
}

Home.PropTypes = {
   history: PropTypes.shape({
      push: PropTypes.func.isRequired,
   }).isRequired
}
export default Home;
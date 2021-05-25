import React, { useEffect, useState } from 'react';
import { getOnePlace } from '../../services/placesApi';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ShareIcon from '@material-ui/icons/Share';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '800px',
    margin: 'auto',
    textDecoration: 'none',

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const PlaceDetails = ({ match }) => {
  const classes = useStyles();

  const [place, setPlace] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOnePlace(match.params.id)
      .then(setPlace)
      .finally(() => setLoading(false));
  }, []);

  const {
    name,
    description,
    location,
    image,
    pool,
    wifi,
    pricePerNight,
    ImageThubnail,
    maxGuests,
    petFriendly,
  } = place;
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <Card className={classes.root}>
      <CardHeader title={name} />
      <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <br />
        <Typography variant="body2" color="textSecondary" component="p">
          ${pricePerNight} per night
        </Typography>
          <br />
        <Typography variant="body2" color="textSecondary" component="p">
          {location}
          </Typography>
          <br />
        <Typography variant="body2" color="textSecondary" component="p">
          Guests allowed {maxGuests}
          </Typography>
          <br />
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
          </Typography>
          <br />
        {pool ? (
          <Typography variant="body2" color="textSecondary" component="p">
            There's a Pool!!!
          </Typography>
          ) : null}
          <br />
        {petFriendly ? (
          <Typography variant="body2" color="textSecondary" component="p">
            Furry Friends Welcome!!!
          </Typography>
          ) : null}
          <br />
        {wifi ? (
          <Typography variant="body2" color="textSecondary" component="p">
            A wifi connection is available!!!
          </Typography>
        ) : null}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <CalendarTodayIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default PlaceDetails;

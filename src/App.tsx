import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  Card,
  CardContent,
} from '@material-ui/core';
import logo from './logo.svg';
import './App.scss';

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    width: '25vw',
    height: '20vh',
    padding:'50px',
    cursor: 'pointer',
    margin:'20px',
    backgroundColor:'#BADA55'
  },

}));

function App() {

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className="App">
          <Typography
            component="h3"
            variant="h6"
            className="is-with-indicator text-padding__24"
          >
            Title
          </Typography>

          <Box display="flex" justifyContent="center" alignItems="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={11}
              lg={11}
              justify="center"
              spacing={2}
              container
            >
              <Card
              className={classes.card}
              >
                HEll - o   1
                </Card>
              <Card
              className={classes.card}
              >
                2
                </Card>

            </Grid>
          </Box>
    </Container>
  );
}

export default App;

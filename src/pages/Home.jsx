import { Container, Grid, Typography } from "@mui/material"
import { TourCard } from "../components/TourCard"

import cities from '../data.json'

export const Home = () => {
  return (
    <div className="App">
      <Container sx={{ marginY: 5 }}>
        {cities.map(city => (
          <>
            <Typography
              key={city.name}
              variant="h4"
              component="h1"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  )
}

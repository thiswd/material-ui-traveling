import { Container, Grid } from '@mui/material'
import { TourCard } from './components/TourCard'
import './App.css'
import SearchAppBar from './components/AppBar'

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  )
}

export default App

import { Container, Grid } from '@mui/material'
import { TourCard } from './components/TourCard'
import './App.css'

function App() {
  return (
    <div className="App">
      <Container>
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

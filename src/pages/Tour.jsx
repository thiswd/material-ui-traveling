import { Box, Container, Typography } from "@mui/material"
import { ImageCollage } from "../components/ImageCollage"

export const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" alt="" height={325} />
        <ImageCollage />
      </Box>
    </Container>
  )
}

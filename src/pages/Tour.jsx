import { BottomNavigation, Box, Container, Paper, Typography } from "@mui/material"
import { ImageCollage } from "../components/ImageCollage"
import CustomizedAccordions from "../components/Accordion"
import { BasicModal } from "../components/Modal"

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
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this tour
        </Typography>
        <Typography marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt quasi ex debitis libero provident excepturi, animi quas numquam? Quo veniam, perferendis voluptatibus voluptatum est sed rem eius. Eius suscipit doloremque omnis quidem ducimus commodi veniam architecto. Et, repellendus voluptatum!
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={3}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

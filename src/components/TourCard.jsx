import { Box, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

export const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src="https://picsum.photos/200/300" className="img" />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Um bom lugar
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" component="p">5 hours</Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

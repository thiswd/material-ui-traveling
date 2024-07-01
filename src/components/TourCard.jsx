import { Box, Grid, Rating, ThemeProvider, Typography, createTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import { AccessTime } from '@mui/icons-material';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2"
          },
          style: {
            fontSize: 11
          }
        },
        {
          props: {
            variant: "body3"
          },
          style: {
            fontSize: 9
          }
        },
      ]
    }
  }
})

export const TourCard = () => {

  return (
    <Grid item xs={4}>
      <ThemeProvider theme={theme}>
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
              <AccessTime sx={{ color: "gray", width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>5 hours</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            >
              <Rating name="read-only" value={3.5} precision={0.5} size="small" readOnly />
              <Typography variant="body2" component="p" marginLeft={0.5}>3.5</Typography>
              <Typography variant="body3" component="p" marginLeft={1.5}>(123 reviews)</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" component="h3" marginTop={0}>From R$ 500</Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

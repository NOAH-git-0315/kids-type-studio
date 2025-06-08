import { Grid, Paper } from '@mui/material';

export default function TestGrid() {
  return (
    <Grid container spacing={2}>
      <Grid>
        <Paper>Left</Paper>
      </Grid>
      <Grid>
        <Paper>Right</Paper>
      </Grid>
    </Grid>
  );
}
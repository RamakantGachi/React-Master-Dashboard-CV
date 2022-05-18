import { Grid } from "@mui/material";
import React from "react";
import DATA from "@config/data.json";
import DashCard from "@components/Dashboard/card";

function Dashboard() {
  return (
    <Grid
      className="App container d-flex align-items-center justify-content-center"
      container
      spacing={2}
      style={{
        minHeight: "91vh",
        backgroundImage: "url(/bgimage.png)",
        backgroundSize: "cover",
        minWidth: "100vw",
        margin: 0,
        overflow: "hidden",
      }}
    >
      {Object.keys(DATA).map((obj, id) => (
        <Grid item xs={4}>
          <DashCard key={id} title={obj} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Dashboard;
